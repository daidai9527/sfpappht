<?php


namespace app\api\controller;


use app\common\controller\Api;
use think\Request;
use app\admin\model\Bang as Bangs;

class Bang extends Api
{
    protected $noNeedLogin = ['*'];

    //支付宝
    public function zhb(Request $request)
    {
        $user = $this->auth->getUser();
        $req = $request->post();
        $bang = new Bangs();
        if($bang->find($user->id)){
           $this->error('记录已存在，请勿重新申请');
        }
        $res = $bang->save(['userid'=>$user->id,'zfb'=>$req['zfb']]);
        if($res){
           $this->success('绑定成功等待审核','',200);
        }else{
            $this->error('网络错误','',100);
        }
    }
    //英航卡
    public function bank(Request $request)
    {
        $user = $this->auth->getUser();
        $req = $request->post();
        $bang = new Bangs();
        $res = $bang->save(['userid'=>$user->id,'bandcard'=>$req['bandcard'],'khh'=>$req['khh'],'name'=>$req['name'],'fl'=>1]);
        if($res){
            $this->success('绑定成功等待审核','',200);
        }else{
            $this->error('网络错误','',100);
        }
    }
}
