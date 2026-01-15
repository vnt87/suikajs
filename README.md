# Tổng hợp Dưa Hấu Lớn (Suika Game)

**Tuyên bố: Dự án này chỉ nhằm mục đích giúp mọi người học tập kỹ thuật và giải trí, vui lòng không lan truyền rộng rãi hoặc sử dụng trang web đã chỉnh sửa cho mục đích thương mại để tránh vi phạm bản quyền!**

> Cách đơn giản nhất để mod và phát hành "Tổng hợp Dưa Hấu Lớn", đi kèm công cụ thay đổi hình ảnh, không cần sửa mã nguồn, chỉ cần sửa cấu hình!
>
> Nếu thấy hữu ích, hãy tặng một ngôi sao (star), nếu có thắc mắc vui lòng liên hệ WeChat: liyupi66
> 
> Tác giả: Công chúng hiệu kỹ thuật lập trình [『 Programmer Yu Pi 』](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw), chào mừng bạn theo dõi ❤️
>
> Nếu gặp vấn đề, hãy đọc phần [ Vấn đề và Giải pháp ](#vấn-đề-và-giải-pháp) ở cuối tài liệu này.

Hướng dẫn chi tiết: [Mod và đưa trò chơi Tổng hợp Dưa Hấu Lớn của bạn lên mạng, hướng dẫn đầy đủ nhất!](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

Video hướng dẫn: [Hướng dẫn mod Tổng hợp Dưa Hấu Lớn tận tâm nhất, từ chỉnh sửa đến phát hành!](https://www.bilibili.com/video/BV1Vy4y1n7KW/)

Chơi bản chưa chỉnh sửa trực tuyến: [https://daxigua.liyupi.com](https://daxigua.liyupi.com)

Chơi bản mod trực tuyến: [https://dadaxigua.liyupi.com](https://dadaxigua.liyupi.com)

Mã nguồn bản chưa chỉnh sửa: [https://github.com/liyupi/daxigua/releases/tag/1.0.0](https://github.com/liyupi/daxigua/releases/tag/1.0.0)

🔥 [Mới ra mắt công cụ thay đổi hình ảnh Dưa Hấu Lớn, hiệu quả gấp đôi!](https://daxigua-tools.liyupi.com)

![Khoe với bạn bè](./assets/dadaxigua.png)

### Mục lục

- [Chạy tại địa phương](#chạy-tại-địa-phương)

- [Mod nhanh](#mod-nhanh)

- [Phát hành trực tuyến](#phát-hành-trực-tuyến)

- [Nguyên lý Mod](#nguyên-lý-mod)

- [Vấn đề và Giải pháp](#vấn-đề-và-giải-pháp)


### Chạy tại địa phương

> Cung cấp hai cách chạy tại địa phương: serve và Docker. Người mới bắt đầu nên sử dụng cách đầu tiên.

#### Dành cho người mới

1. Cài đặt công cụ serve:

    ```bash
    npm i -g serve
    ```

2. Vào thư mục daxigua, chạy serve:

    ```bash
    serve
    ```
   
3. Mở trình duyệt và truy cập localhost:5000!

#### Đã cài đặt Docker

> Cảm ơn sự đóng góp của [buchenglei](https://github.com/buchenglei)

1. Xây dựng image
    
    ```bash
    docker build -t daxigua-server .
    ```

2. Chạy container

    ```bash
    docker run -d --name play-daxigua -p5000:5000 daxigua-server
    ```

### Mod nhanh

> Chỉnh sửa theo các hướng dẫn sau, sẽ tiếp tục bổ sung

1. Đổi điểm số: Sửa file extraSettings.js

2. Đổi hình ảnh: Thay thế hình ảnh trong các thư mục chỉ định dưới thư mục res/raw-assets, phải cùng tên file, phần mở rộng và kích thước. Ghi đè thành công sẽ có hiệu lực. [Tài liệu nguyên liệu có thể thay thế](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

3. Chế độ bất tử: Sửa file extraSettings.js

4. Chỉ định trái cây đầu tiên: Sửa file extraSettings.js

5. Chỉ định trái cây xuất hiện tiếp theo: Sửa file extraSettings.js

6. Trái cây lớn tổng hợp thành trái cây nhỏ: Sửa file extraSettings.js

7. Làm trái cây đàn hồi hơn (Q-弹): Sửa file extraSettings.js, [Tham khảo nguyên lý](https://docs.cocos.com/creator/api/zh/classes/PhysicsCircleCollider.html?h=circlecollider)

8. Giảm tốc độ rơi của trái cây: Sửa file extraSettings.js, [Tham khảo nguyên lý](https://docs.cocos.com/creator/manual/zh/physics/physics/rigid-body.html?h=%E5%88%9A%E4%BD%93)

9. Thay thế âm nhạc: Ghi đè âm nhạc tương ứng trong thư mục res/raw-assets, [Tài liệu nguyên liệu có thể thay thế](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

10. Thay thế hình nền: Nguyên lý giống như đổi hình ảnh, [Tài liệu nguyên liệu có thể thay thế](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ)

11. Gỡ bỏ quảng cáo: Thay thế hình ảnh quảng cáo bằng [hình nền cùng màu](https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/0.png)

12. Thay thế liên kết quảng cáo: Sửa file extraSettings.js

13. Đổi tiêu đề trang web: Sửa file extraSettings.js

14. Bật cửa sổ chọn điểm: Sửa file extraSettings.js

15. Click vào icon góc trên bên phải để đổi trái cây: Sửa file extraSettings.js


### Phát hành trực tuyến

> Cung cấp nhiều cách phát hành trực tuyến: Triển khai một chạm trên Tencent Cloud, Vercel, Tencent Cloud Static Website Hosting, GitHub Pages, v.v. Người mới bắt đầu nên sử dụng Vercel.

#### Tencent Cloud Webify Triển khai một chạm

Tencent Cloud Webify hỗ trợ clone template vào kho lưu trữ cá nhân của bạn, triển khai ứng dụng và tự động kích hoạt triển khai lại sau khi cập nhật mã nguồn.

Nhấn vào nút dưới đây:

[![](https://cloudbase.net/deploy.svg)](https://console.cloud.tencent.com/webify/new?tpl=https%3A%2F%2Fgithub.com%2Fliyupi%2Fdaxigua&reponame=daxigua)

Cấu hình ứng dụng như sau:

- **Lệnh xây dựng (Build command)** và **Lệnh cài đặt (Install command)** để trống
- **Thư mục đầu ra (Output directory)** điền `.`

![](https://main.qcloudimg.com/raw/8ca88a49907cd6f2657084d9a63def15.png)

Sau đó nhấn triển khai ứng dụng là xong.


#### Vercel

Dành cho người mới bắt đầu chưa có nền tảng. Thao tác đơn giản, tên miền ngắn gọn, nhưng server ở nước ngoài nên có thể hơi chậm.

Vercel là nền tảng hosting website miễn phí, có thể giúp chúng ta triển khai website, tạo URL ngắn có thể truy cập và có thể liên kết với tên miền tự mua.

Đầu tiên cài đặt Vercel qua lệnh npm:

```
npm install -g vercel
```

Sau khi cài đặt xong, vào thư mục chứa `index.html` (của tôi là daxigua), sử dụng lệnh `vercel` để phát hành website:

```
cd daxigua
vercel --prod
```

Sau đó nó sẽ yêu cầu bạn nhập một số tùy chọn, ví dụ như tên dự án, có liên kết với dự án hiện có không, có lưu cấu hình hiện tại không. Nếu muốn tạo nhiều dự án, tuyệt đối không liên kết với dự án hiện có!

Phát hành thành công, bạn sẽ nhận được một URL, mở ra là có thể thấy trò chơi rồi, bạn cũng có thể chia sẻ URL cho người khác!

#### Tencent Cloud Static Website Hosting

Server trong nước, tốc độ truy cập nhanh hơn và liên kết không bị WeChat chặn.

Địa chỉ: https://cloud.tencent.com/product/wh

Có thể tham khảo nội dung bài viết này để thử phát hành: [Mod và đưa trò chơi Tổng hợp Dưa Hấu Lớn của bạn lên mạng, hướng dẫn đầy đủ nhất!](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)


### Nguyên lý Mod

Vui lòng đọc trước: [Mod và đưa trò chơi Tổng hợp Dưa Hấu Lớn của bạn lên mạng, hướng dẫn đầy đủ nhất!](https://mp.weixin.qq.com/s/H9VR1MWn-9bKSC_1l_MkJw)

Tôi đã bổ sung chú thích cho file `project.js`, mọi người có thể tìm kiếm từ khóa, ví dụ "Điểm cộng thêm" (đổi điểm) để định vị nhanh và học nguyên lý chỉnh sửa.

### Vấn đề và Giải pháp

1. Không thể cài đặt serve hoặc Vercel?

    Đáp: Nếu báo không tìm thấy npm, vui lòng cài đặt npm trước.

    Nếu bị kẹt trong quá trình cài đặt, hãy thử nhấn phím trên bàn phím (có thể bị treo giả), nếu vẫn không được hãy dùng npm cài đặt cnpm (mirror trong nước, nhanh hơn):
    
    ```bash
    npm install cnpm -g --registry=https://registry.npm.taobao.org 
    ```
    
    Sau đó dùng cnpm để cài đặt: `cnpm i -g serve` hoặc `cnpm i -g vercel`
    
2. URL Vercel bị WeChat chặn thì làm sao?
   
    Đáp: Có thể copy URL vào trình duyệt để mở, hoặc đăng ký một tên miền, cấu hình phân giải tên miền tại Vercel và nhà cung cấp dịch vụ.
    Vercel cơ bản là server hải ngoại, không cần đăng ký (ICP).

3. Làm sao để chơi game web trên máy tính?
   
    Đáp: Trong trình duyệt, nhấn F12 để mở công cụ nhà phát triển, nhấn vào icon hình điện thoại là được.
    
4. Tại sao sau khi chạy serve, mở trang web lại trắng xóa?

    Đáp: Khả năng cao là bạn đã chạy serve ở sai thư mục, hãy đảm bảo chạy serve trong thư mục chứa index.html.

5. Chạy lệnh vercel hiện signUp?

    Đáp: Cần phải lên [trang chủ Vercel](https://vercel.com/) để đăng ký trước.

6. Xác thực email vercel thất bại?

    Đáp: Trước tiên hãy xác nhận email có đúng không, nếu xác thực thất bại khả năng cao là do mạng, hãy thử dùng mạng 4G. Hoặc mở email trong trình duyệt khác và nhấn nút xác thực.

7. Làm sao để dùng vercel phát hành nhiều phiên bản cùng lúc?

    Đáp: Sau khi nhập vercel, chọn không liên kết với dự án hiện có (link) và sử dụng một tên dự án mới (project name).

8. Muốn tạo phiên bản mới sau khi sửa file, nhưng nhập vercel prod xong nó ghi đè luôn mà không cho chọn liên kết dự án, phải làm sao?
    
    Đáp: Sau khi chạy vercel, nó sẽ tạo thư mục ẩn `.vercel` tại địa phương để lưu thông tin phát hành trước đó, chỉ cần xóa thư mục đó đi là được.

9. Sau khi xuất URL, tôi đã sửa hình ảnh nhưng trong game vẫn là hình cũ?
    
    Đáp: URL đọc file từ xa, chỉ sửa ở máy bạn tất nhiên không có tác dụng! Hãy chạy lại lệnh vercel hoặc Tencent Cloud để tải file mới nhất lên.
    
10. Mac có thể sử dụng hướng dẫn này không?
    
    Đáp: Tất nhiên là được! Mọi lệnh hoàn toàn giống với Windows! Chỉ cần đổi công cụ dòng lệnh cmd thành terminal (nhấn command + space, tìm terminal).
 
11. Tại sao mở trang web lại bị trắng màn hình?
    
    Đáp: Khả năng cao là do bạn sửa sai dẫn đến thiếu một số file. Có thể thử tải lại code và sửa lại, hãy đảm bảo chạy được ở máy trước khi phát hành!
