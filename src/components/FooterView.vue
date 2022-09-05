<template>
  <footer class="footer">
        <div class="footer-top">
          <div class="inner">
            <ul class="siteinfo-list">
              <li>
                <span><em>상호</em> 주식회사 세손</span>
                <span><em>대표자명</em> 임정아</span>
                <span><em>대표전화번호</em> 1600-6274</span>
                <span><em>개인정보관련책임자</em> <a href="#">임지은(help@seisson.com)</a></span>
              </li>
              <li>
                <span><em>사업장소재지</em> 04378 서울특별시 용산구 한강대로 95 (한강로2가) 제에이동 15층 1515</span>
              </li>
              <li>
                <span><em>사업자등록번호</em> 183-86-01860</span>
                <span><em>통신판매업</em> 신고번호제2021-서울용산-0634호</span>
              </li>
            </ul>
            <a href="#" class="insta-link"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="inner clearfix">
            <span class="copy">Copyright © <strong>Seisson Inc</strong>. All rights reserved</span>
            <ul class="service-list">
              <li><a href="#">CS Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
      </footer>
</template>

<script>
export default {

}
</script>

<style>
  /* 하단 */
  .footer {
    position: relative;
    display: block;
  }

  .footer .inner {
    width: 777px;
  }

  .footer-top {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #f3f3f3;
    padding: 35px 0;
  }

  .siteinfo-list {
    position: relative;
    display: block;
  }

  .siteinfo-list li {
    position: relative;
    display: block;
    white-space: nowrap;
  }

  .siteinfo-list li:last-child {
    margin-bottom: 0;
  }

  .siteinfo-list li span {
    position: relative;
    display: inline-block;
    margin-right: 40px;
    font-size: 12px;
    color: #777;
  }

  .siteinfo-list li span em {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    font-size: 12px;
    color: #7e868c;
  }

  .insta-link {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 155px;
    height: 30px;
    background: url("@/assets/images/ico_insta.png") no-repeat center;
  }

  .footer-bottom {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #e5e5e5;
    padding: 25px 0;
  }

  .copy {
    position: relative;
    display: block;
    float: left;
    font-size: 12px;
    color: #777;
  }

  .copy strong {
    font-weight: 600;
  }

  .service-list {
    position: relative;
    display: block;
    float: right;
  }

  .service-list li {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }

  .service-list li a {
    position: relative;
    display: block;
    font-size: 12px;
  }

  @media all and (max-width: 800px) {
    .footer .inner {
      width: 100%;
    }

    .footer-top .inner {
      padding-bottom: 35px;
    }

    .siteinfo-list {
      padding: 0 20px;
    }

    .siteinfo-list li span {
      display: block;
      margin-bottom: 10px;
    }

    .siteinfo-list li span em {
      width: 120px;
    }

    .copy {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }

    .service-list {
      width: 100%;
      text-align: center;
    }
  }

</style>