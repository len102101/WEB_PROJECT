<template lang="html">
    <body>

    <div class="blank mb-4 ml-3" style="margin-top: 30px;">
      <img src="../assets/img/hij.jpg" class="img-circle mr-2" style="margin-top: -10px;">
      <table>
        <tr>
          <td><small class="text-secondary">내 게시글 <strong class="text-dark"> 15</strong></small></td>
        </tr>
        <tr>
          <td><small class="text-secondary">내 댓글 <strong class="text-dark"> 15</strong></small></td>
          <td><small class="text-secondary">내 포인트 <strong class="text-dark"> 15</strong></small></td>
        </tr>
      </table>
    </div><hr style="border: solid 4px #F2F2F2; margin-top: 40px;">

    <div class="container-fluid">
      <img src="../assets/img/lock.png" class="img-icon">
      <small class="tex t-secondary"><strong>비밀번호 변경하기</strong><span class="mr-2 fas fa-angle-right float-right" style="margin-top: 13px;"></span></small>
    </div>

    <hr style="border: solid 4px #F2F2F2;">

    <div class="container-fluid">
      <img src="../assets/img/chart.png" class="img-icon">
      <small class="text-secondary"><strong>내 활동점수 보기</strong><span class="mr-2 fas fa-angle-right float-right" style="margin-top: 13px;"></span></small>
    </div><hr style="border: solid 0.5px #F2F2F2; margin: 10px 10px 10px 10px;">
  </body>
</template>
<style lang="scss">
      a, a:hover, a:visited, a:link, a:active{
        text-decoration: none;
        color: black;
      }

      .ttl{
        margin-top: 5px;
        margin-bottom: 5px;
      }

      li.list-group-item, li.list-group-item-action, li.list-group-item-warning, li.d-flex, li.justify-content-between, li.align-items-center{
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .dataTStyle{
        width:auto;
        max-width:80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .details{
        font-size: small;
        color: #b6b9c1;
      
        span::after{
            content: "|";
            color: #e5e8ef;
            padding-right: 5px;
            padding-left: 5px;
        }
      }
      .pr-card-body {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 0.8rem;
        padding-left: 1.25rem;
      }
      .img-circle {
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 50%;
    width: 80px;
    height: auto;
    float: left;
  }

.text-dark{
  padding-right: 10%;
}

.a-1{
  float: right;
}

.a-3{
  padding-right: 3.4%;
}

.table{
  border-right:none;
  border-left:none;
  border-top:none;
  border-bottom:none;
}

td{
  width: 45%;
}

.img-icon{
  width: 40px;
  height: auto;
}

.text-secondary{
  padding-left: 20px;
}

    </style>