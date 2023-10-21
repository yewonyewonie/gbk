Header{
    /** 아래로 스크롤 시 숨김, 멈추고 몇초 후 나타남, navigation1 호버 시 세부 항목 나타남 **/ 
     Logo
        └> HomePage("/")
     navigation{

        별빛야행 -> 소개PageRoute별빛야행/소개("/star/about")
            └ list{
                - anchor(소개)
                    └> 소개PageRoute별빛야행/소개("/star/about")
                
                - anchor(안내)
                    └> 소개PageRoute별빛야행/안내("/star/guide")
                    
                - anchor(지도)
                    └> 소개PageRoute별빛야행/지도("/star/map")
                }

        달빛기행 -> 소개PageRoute달빛기행/소개("/moon/about")
            └ list{
                - anchor(소개)
                    └> 소개PageRoute밤의석조전/소개("/night/about")

                - anchor(안내)
                    └> 소개PageRoute달빛기행/안내 ("/moon/guide")

                - anchor(지도)
                    └> 소개PageRoute달빛기행/지도("/moon/map")
                }

        밤의석조전 -> 소개PageRoute밤의석조전/소개("/night/about")
            └ list{
                - anchor(소개)
                    └> 소개PageRoute밤의석조전/소개("/night/about")
                - anchor(안내)
                    └> 소개PageRoute밤의석조전/안내("/night/guide")
                - anchor(지도)
                    └> 소개PageRoute밤의석조전/지도("/night/map")
                }

         갤러리 -> 갤러리PageRoute/#별빛야행("/gallery/star")
            └ list{
                - anchor(별빛야행) 
                    └> 갤러리PageRoute/#별빛야행("/gallery/star")
                - anchor(달빛기행) 
                    └> 갤러리PageRoute/#달빛기행("/gallery/moon")
                - anchor(밤의석조전)
                    └> 갤러리PageRoute/#밤의석조전("/gallery/night")
            }

        안내사항 -> 안내사항pageRoute/공지사항 ("/notice/inform")
            └ list{
                - anchor(공지사항) 
                    └> 안내사항PageRoute/공지사항("/notice/inform")
                - anchor(문의하기) 
                    └> 안내사항PageRoute/문의하기("/notice/inquire")
                - anchor(FAQ)
                    └> 안내사항PageRoute/FAQ("/notice/faq")
            }
         예약하기 
            └ list{
                - anchor(별빛야행 예약) 
                    └> 별빛야행티켓예약Page("외부 경로")
                - anchor(달빛기행 예약) 
                    └> 달빛기행티켓예약Page("외부경로")
                - anchor(밤의석조전 예약)
                    └> 밤의석조전티켓예약Page("외부경로")
    }
     navigation2{
         로그인 
            └ btn -> 로그인Page("/sign/in")
         회원가입 
            └ btn -> 회원가입Page("/sign/up")
    }
}

HomePage("/"){  
     Intro Section 3D Model

    /**이미지 내부에 존재하는 버튼을 클릭 - 이미지가 보여주는 행사의 소개Page로 이동**/
     About Section  - 별빛야행Img   - btn
                                        └> 소개PageRoute별빛야행/소개("/star/about")
                    - 달빛기행Img   - btn 
                                        └> 소개PageRoute달빛기행/소개("/moon/about")
                    - 밤의석조전Img - btn 
                                        └>소개PageRoute밤의석조전/소개("/night/about")

    /**이미지 내부에 존재하는 버튼을 클릭 - 이미지의 Tag와 일치하는 갤러리 Page의 Tab으로 이동**/
     Gallery Section - MainImg{#별빛야행, #달빛기행, #밤의석조전} - btn     
                                                                      └>갤러리("/gallery/#star #moon #night")

    /**버튼 클릭 - 공지사항Page로 이동, 목록의 글 클릭 - 공지사항의 해당 게시글로 이동**/                                               
     Notice Section - btn
                        └> 안내사항pageRoute/공지사항 ("/notice/inform")
                    
                    - list - anchor 
                                └> 안내사항pageRoute/공지사항/Post("/notice/#inform #inquire #faq/#id")

    /**Paper 클릭 - 예약 페이지("외부 경로")로 이동**/ 
     Booking Section - 별빛야행 Paper
                                    └> 별빛야행티켓예약Page("외부 경로")
                     - 달빛기행 Paper
                                    └> 달빛기행티켓예약Page("외부 경로")
                     - 밤의석조전 Paper
                                    └> 밤의석조전티켓예약Page("외부 경로")
}

소개Page("/star","/moon","/night"){

    별빛야행("/star")
        - 소개PageRoute별빛야행/소개("/star/about") //Star aboutPage First Veiw
            └tabBtn
                └> 소개PageRoute별빛야행/안내("/star/guide")
                └> 소개PageRoute별빛야행/지도("/star/map")

        - 소개PageRoute별빛야행/안내 ("/star/guide")
            └tabBtn
                └> 소개PageRoute별빛야행/지도("/star/map")
                └> 소개PageRoute별빛야행/소개("/star/about")

        - 소개PageRoute별빛야행/지도 ("/star/map")
            └tabBtn
                └> 소개PageRoute별빛야행/소개("/star/about")
                └> 소개PageRoute별빛야행/안내("/star/guide")

    달빛기행("/moon")
        - 소개PageRoute달빛기행/소개("/moon/about") //Moon aboutPage First Veiw
            └tabBtn
                └> 소개PageRoute달빛기행/안내 ("/moon/guide")
                └> 소개PageRoute달빛기행/지도("/moon/map")

        - 소개PageRoute달빛기행/안내 { "/moon/guide"}
            └tabBtn
                └> 소개PageRoute달빛기행/지도("/moon/map")
                └> 소개PageRoute달빛기행/소개("/moon/about")

        - 소개PageRoute달빛기행/지도("/moon/map")
            └tabBtn
                └> 소개PageRoute달빛기행/소개("/moon/about")
                └> 소개PageRoute달빛기행/안내("/moon/guide")

    밤의석조전("/night")
        - 소개PageRoute밤의석조전/소개("/night/about") //Night aboutPage First Veiw
            └tabBtn
                └> 소개PageRoute밤의석조전/안내("/night/guide")
                └> 소개PageRoute밤의석조전/지도("/night/map")

        - 소개PageRoute밤의석조전/안내("/night/guide")
            └tabBtn
                └> 소개PageRoute밤의석조전/지도("/night/map")
                └> 소개PageRoute밤의석조전/소개("/night/about")

        - 소개PageRoute밤의석조전/지도 ("/night/map")
            └tabBtn
                └> 소개PageRoute밤의석조전/소개("/night/about")
                └> 소개PageRoute밤의석조전/안내("/night/guide")

}

갤러리Page("/gallery"){

    └ 갤러리PageRoute/#별빛야행("/gallery/star") //gallery first view
        └ tabBtn  갤러리PageRoute/#달빛기행("/gallery/moon")
        └ tabBtn  갤러리PageRoute/#밤의석조전("/gallery/night")
        └ img
            └> 갤러리PageRoute/#별빛야행/#Post("gallery/star/#id")

    └ 갤러리PageRoute/#달빛기행("/gallery/moon")
        └ tabBtn  갤러리PageRoute/#별빛야행("/gallery/star")
        └ tabBtn  갤러리PageRoute/#밤의석조전("/gallery/night")
        └ img
            └> 갤러리PageRoute/#달빛기행/#Post("gallery/moon/#id")

    └ 갤러리PageRoute/#밤의석조전("/gallery/night")
        └ tabBtn  갤러리PageRoute/#별빛야행("/gallery/star")
        └ tabBtn  갤러리PageRoute/#달빛기행("/gallery/moon")
        └ img
            └> 갤러리PageRoute/#밤의석조전/#Post("gallery/night/#id")

}

공지사항Page("/notice"){

    └ 안내사항PageRoute/공지사항("/notice/inform") //gallery first view
        └ tabBtn  안내사항PageRoute/문의하기("/notice/inquire")
        └ tabBtn  안내사항PageRoute/FAQ("/notice/faq")
        └ list
            └ anchor -> 공지사항pageRoute/공지사항/Post("/notice/inform /#id")

    └ 안내사항PageRoute/문의하기("/notice/inquire")
        └ tabBtn  안내사항PageRoute/FAQ("/notice/faq")
        └ tabBtn  안내사항PageRoute/공지사항("/notice/inform")
        └ Input

    └ 안내사항PageRoute/FAQ("/notice/faq")
        └ tabBtn  안내사항PageRoute/FAQ("/notice/faq")
        └ tabBtn  안내사항PageRoute/공지사항("/notice/inform")
        └ list
            └ anchor -> 안내사항pageRoute/FAQ/Post("/notice/faq/#id")
}

회원정보Page("/sign"){
    └ 로그인Page("/sign/in")
        - btn -> HomePage("/#id#password")
        - list - anchor -> 회원가입Page("/sign/up")
               - anchor -> 비밀번호찾기Page("/sign/find-password")
               - anchor -> ID찾기Page("/sign/find-id")
    └ 회원가입Page("/sign/up")
        - btn -> 로그인Page("/sign/in")

    └ 비밀번호찾기Page("/sign/find-password")
        - tabBtn -> ID찾기Page("/sign/fint-id")
        - btn -> 비밀번호찾기완료Page("미구현")

    └ ID찾기Page("/sign/fint-id")
        - tabBtn -> 비밀번호찾기Page("/sign/find-password")
        - btn -> ID찾기완료Page("미구현")
}