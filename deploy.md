# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo GitHub Repository

1. Đi tới [GitHub](https://github.com) và đăng nhập
2. Click nút "New" để tạo repository mới
3. Đặt tên repository (ví dụ: `random-person-selector`)
4. Chọn "Public" 
5. Click "Create repository"

## Bước 2: Upload code lên GitHub

### Cách 1: Sử dụng Git command line

```bash
# Khởi tạo git trong thư mục dự án
git init

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit: Random Person Selector App"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Cách 2: Upload trực tiếp trên GitHub

1. Trong repository vừa tạo, click "uploading an existing file"
2. Kéo thả tất cả file (.html, .css, .js, .md) vào
3. Viết commit message
4. Click "Commit changes"

## Bước 3: Kích hoạt GitHub Pages

1. Trong repository, đi tới tab "Settings"
2. Cuộn xuống phần "Pages" trong sidebar trái
3. Trong "Source", chọn "Deploy from a branch"
4. Chọn branch "main" và folder "/ (root)"
5. Click "Save"

## Bước 4: Truy cập website

Sau 1-2 phút, website sẽ có sẵn tại:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## Lưu ý

- Website sẽ cập nhật tự động mỗi khi bạn push code mới
- Có thể mất vài phút để thay đổi có hiệu lực
- Hoàn toàn miễn phí cho public repositories

## Tùy chọn khác (nếu muốn domain riêng)

### Netlify (Miễn phí)
1. Đi tới [Netlify](https://netlify.com)
2. Kéo thả folder chứa file vào trang
3. Website sẽ được deploy ngay lập tức

### Vercel (Miễn phí)
1. Đi tới [Vercel](https://vercel.com)
2. Import từ GitHub repository
3. Deploy tự động

### GitHub Codespaces (Tùy chọn)
Có thể chạy và test trực tiếp trên GitHub mà không cần download về máy. 