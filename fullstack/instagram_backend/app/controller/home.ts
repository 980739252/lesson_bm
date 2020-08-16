import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node HTTP  协议 基于应答式 ctx=request+response
    //ctx.response
    ctx.body = 'hello 张阿风'
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}

