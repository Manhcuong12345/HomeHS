# Project Blog Nodejs TypeScript MongoDB

1. Quá trình cài đặt và builder project:

   -B1: Tạo project qua visual code.

   -B2: Sau khi tạo xong, tạo file index là nơi config database, swagger, routing...

   -B3: Cài đặt các gói package để tiến build project.

   -B4: Tạo folder Services,Models,Interface,Controller...

   -B5: Sau khi hoàn tất khởi chạy project

2. Công nghệ,ngôn ngữ:

   -ngôn ngữ TypeScript
   
   -Nodejs

   -Cơ sở dữ liệu MongoDB

   -Tool MongoDB-Compass,GUI

   -GitHub

3. Mô tả API và chức năng:
   - Đối với MongoDB khi tạo dữ liệu thì Id tự động tạo, không cần nhập Id.
   - Phân quyền gồm user,admin. Khi đăng ký mặc định là user. Admin quản lý user. Không có super admin.
   - API Login,Register => Login bao gồm email và password => Kết quả trả về là chuỗi jwt token chứa Id và email của user đó.
   - API User => các phương thức gồm (getAll, post, get by Id, delete, update). Phân quyền gồm user và admin. Admin có quyền thêm xóa sửa cập nhật user.
   - API Articles => các phương thức gồm (getAll, post, get by Id, delete, update). User có quyền thêm xóa sửa cập nhật bài viết. Điều kiện khi cập nhật và xóa bài          viết:
        + Kiểm tra id trong token mà user đăng nhập có trùng với id user đăng bài viết đó có đăng không => Không trùng, không cho phép xóa và cập nhật.
   - API Category => các phương thức gồm (getAll, post, get by Id, delete, update). Admin có quyền thêm xóa sửa cập nhật.
   - API Comment => các phương thức gồm (getAll, getCommentToArticlesId ,post, getId, delete, update) => User được quyền thêm, xóa, sửa comments. Điều kiện khi cập          nhật và xóa bài viết:
        + Kiểm tra id trong token mà user đăng nhập có trùng với id user bình luận viết đó có đăng không => Không trùng, không cho phép xóa và cập nhật.

4. Bản thiết kế database, API, mô hình ERD
   - Link file thiết kế
   https://app.diagrams.net/#G1sru78WHHEO96tPGYY-0w04YB4HvugbvH

6. Kết quả:
   - Deploy Heroku tài liệu Swagger
   https://testhomesv.herokuapp.com/docsApi/
