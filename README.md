# **테스터즈 클럽**  
> **앱 출시 전 테스터를 모으는 플랫폼을 개발하는 프로젝트**

---

## **목차**
1. [실행 환경](#1-실행-환경)  
   1-1. [로컬 실행](#1-1-로컬-실행)  
   1-2. [환경 변수](#1-2-환경-변수)  
2. [기술 스택](#2-기술-스택)  
3. [디렉토리 구조](#3-디렉토리-구조)  
4. [ERD](#4-erd)  
5. [기능 구현](#5-기능-구현)  
   5-1. [사전 예약 신청](#5-1-사전-예약-신청)  
   5-2. [사전 예약 신청 수](#5-2-사전-예약-신청-수)  

---

## **1. 실행 환경**
### **1-2. 환경 변수**  
- 아래 항목들이 `.env` 파일에 반드시 존재해야 합니다:
  - `DB_HOST`: 데이터베이스 연결 HOST 주소
  - `DB_TYPE`: 데이터베이스 연결 TYPE
  - `DB_USERNAME`: 데이터베이스 연결 username
  - `DB_PASSWORD`: 데이터베이스 연결 password
  - `DB_DATABASE`: 데이터베이스 연결 database 이름

---

### 기술 스택
<img src="https://img.shields.io/badge/TypeScript-version 4-3178C6">&nbsp;
<img src="https://img.shields.io/badge/Node.js-version 10-E0234E">&nbsp;
<img src="https://img.shields.io/badge/TypeORM-version 0.2-fcad03">&nbsp;
<img src="https://img.shields.io/badge/MySQL-version 8-00758F">&nbsp;

</br>

---

## 디렉토리 구조

<details>
<summary><strong>디렉토리 구조</strong></summary>
<div markdown="1">
 
```bash
─src
    │  app.ts
    │  database.ts
    │  index.ts
    │
    ├─controller
    │      user.ts
    │
    ├─entity
    │      app.ts
    │      index.ts
    │      reviews.ts
    │      user.ts
    │
    ├─routers
    │      index.ts
    │      user.ts
    │
    ├─service
    │      user.ts
    │
    └─swagger
            index.ts
            user.yml
```
</div>
</details>

</br>

## **ERD**

<details>
<summary><strong>ERD 이미지 보기</strong></summary>
<div markdown="1">

![ERD 이미지]()

</div>
</details>

</br>

## 기능구현
### **5-1. 사전 예약 신청** 
* 사전 예약 신청 구현
  
### **5-2. 사전 예약 신청 수** 
* 메인 페이지에 사전 예약 신청 수 보여주기


 ---
 
 ## **Swagger 문서**
API 명세는 Swagger를 통해 확인할 수 있습니다. 아래 링크를 클릭하여 Swagger 문서로 이동하세요.

[Swagger 문서 보러 가기](https://github.com/user-attachments/assets/7503c87e-6948-452e-ba38-596236d7c1f5)

---
