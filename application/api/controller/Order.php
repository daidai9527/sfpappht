<?php


namespace app\api\controller;


use app\common\controller\Api;
use think\Request;

class Order extends Api
{
    protected $noNeedLogin = ['*'];

    //购买会员卡
    public function add(Request $request)
    {
        $this->model = new \app\admin\model\Order();
        if ( ! $request->isPost()) {
            $this->error('ＭＵＳＴ　ＢＥ　ＰＯＳＴ');
        }
        $user = $this->auth->getUser();
        $req = $request->post();
        $req['userid'] = $user['id'];
        $req['code'] = $this->create_orderid();
        $url = 'https://bufpay.com/api/pay/98112';
        $postFields = [];
        $postFields['name'] = '会员卡购买';
        $postFields['pay_type'] = $req['pay_type'];
        $postFields['price'] = $req['price'];
        $postFields['order_id'] = $req['code'];
        $postFields['order_uid'] = $req['userid'];
        $postFields['notify_url'] = config('host') . '/api/notify/card';
        $postFields['return_url'] = '';
        $postFields['feedback_url '] = '';
        $postFields['secret'] = '6a2d15ad90394b4cb6a08b7a7e74aeee';
        $postFields['sign'] = $this->sign($postFields);
        $postFields['format'] = 'json';
        $postFields['user_cache'] = true;
        unset($postFields['secret']);
        $res = $this->sendRequest($postFields, $url);
        if ($res['status'] == 'ok') {
            $req['image'] = $res['qr_img'];//base二维码
            $order = $this->model->allowField(true)->save($req);
            if ($order) {
                $this->result('下单成功', $res, 200);
            }
        } else {
            $this->result('系统错误或网络错误', '', 100);
        }
    }


    //成为代理
    public function agent(Request $request)
    {
        $this->model = new \app\admin\model\Order();
        if ( ! $request->isPost()) {
            $this->error('ＭＵＳＴ　ＢＥ　ＰＯＳＴ');
        }
        $user = $this->auth->getUser();
        $req = $request->post();
        $req['userid'] = $user['id'];
        $req['code'] = $this->create_orderid();
        $url = 'https://bufpay.com/api/pay/98112';
        $postFields = [];
        $postFields['name'] = '成为代理';
        $postFields['pay_type'] = $req['pay_type'];
        $postFields['price'] = $req['price'];
        $postFields['order_id'] = $req['code'];
        $postFields['order_uid'] = $req['userid'];
        $postFields['notify_url'] = config('host') . '/api/notify/agent';
        $postFields['return_url'] = '';
        $postFields['feedback_url '] = '';
        $postFields['secret'] = '6a2d15ad90394b4cb6a08b7a7e74aeee';
        $postFields['sign'] = $this->sign($postFields);
        $postFields['format'] = 'json';
        unset($postFields['secret']);
        $res = $this->sendRequest($postFields, $url);
        if ($res['status'] == 'ok') {
            $req['class'] = 1;
            $order = $this->model->allowField(true)->save($req);
            if ($order) {
                $this->result('下单成功', '', 200);
            }
        } else {
            $this->result('系统错误或网络错误', $res, 100);
        }
    }
    public function recharge(Request $request)
    {
        $this->model = new \app\admin\model\Order();
        if ( ! $request->isPost()) {
            $this->error('ＭＵＳＴ　ＢＥ　ＰＯＳＴ');
        }
        $user = $this->auth->getUser();
        $req = $request->post();
        $find = \app\admin\model\Paylist::where('id',$req['list_id'])->find();
        if(!$find){
            $this->error('列表不存在','',100);
        }
        $req['userid'] = $user['id'];
        $req['cardid'] = $req['list_id'];
        $req['code'] = $this->create_orderid();
        $url = 'https://bufpay.com/api/pay/98112';
        $postFields = [];
        $postFields['name'] = '余额充值';
        $postFields['pay_type'] = $req['pay_type'];
        $postFields['price'] = $find['price'];
        $postFields['order_id'] = $req['code'];
        $postFields['order_uid'] = $req['userid'];
        $postFields['notify_url'] = config('host') . '/api/notify/recharge';
        $postFields['return_url'] = '';
        $postFields['feedback_url '] = '';
        $postFields['secret'] = '6a2d15ad90394b4cb6a08b7a7e74aeee';
        $postFields['sign'] = $this->sign($postFields);
        $postFields['format'] = 'json';
        $postFields['user_cache'] = true;
        unset($postFields['secret']);
        $res = $this->sendRequest($postFields, $url);
        if ($res['status'] == 'ok') {
            $req['image'] = $res['qr_img'];//base二维码
            $order = $this->model->allowField(true)->save($req);
            if ($order) {
                $this->result('下单成功', $res, 200);
            }
        } else {
            $this->result('系统错误或网络错误', '', 100);
        }
    }

    //post请求

    protected function sendRequest($data, $url)
    {
        $headers = array('Content-Type: application/x-www-form-urlencoded');
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data)); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        $result = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            echo 'Errno' . curl_error($curl);//捕抓异常
        }
        curl_close($curl); // 关闭CURL会话
        $arr = json_decode($result, true);
        return $arr;
    }


    private function sign($data_arr)
    {
        return md5(join('', $data_arr));
    }

    //订单号
    public function create_orderid()
    {
        return date('Ymd') . substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
    }
}
