import { request } from "./index"
request.request({
  url: "/goods/category/count",
  method: "GET",
  isShowLoading: false
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);

})
