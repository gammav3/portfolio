$(document).ready(function(){
    $('.skill_q').click(function(){
      $('.skill_name').text("연참");
      $('.cost').text("스태미나 50 / 쿨다운 8 초");
      $('.skill_info').text("재키가 지정한 방향으로 무기를 휘둘러서 스킬 피해를 입힙니다. 연참이 적에게 적중했다면 재사용이 활성화됩니다. 재사용 시 재키가 지정한 방향으로 살짝 전진하며 무기를 휘둘러 스킬 피해를 입힙니다.");
    })
    $('.skill_w').click(function(){
        $('.skill_name').text("아드레날린 분비");
        $('.cost').text("스태미나 50 / 쿨다운 13 초");
        $('.skill_info').text("재키가 아드레날린을 활성화하여 잠시동안 이동 속도가 증가합니다. 아드레날린이 활성화된 동안 출혈 상태의 적을 향해 이동하면 추가로 이동 속도가 증가하며, 출혈 상태의 적에게 기본 공격이 적중하면 자신의 잃은 체력에 비례해 체력을 회복합니다.");
      })
      $('.skill_e').click(function(){
        $('.skill_name').text("습격");
        $('.cost').text("스태미나 60 / 쿨다운 17 초");
        $('.skill_info').text("재키가 지정한 위치로 점프하여, 주변의 적들에게 스킬 피해를 입히고 이동 속도를 감소시킵니다.");
      })
      $('.skill_r').click(function(){
        $('.skill_name').text("전기톱 살인마");
        $('.cost').text("스태미나 120 / 쿨다운 80 초");
        $('.skill_info').text("재키가 일정 시간 동안 전기톱을 꺼내들어 기본 공격으로 추가 스킬 피해를 입힙니다. 재키가 적 실험체 처치에 관여하면 지속 시간이 증가합니다. 일정 시간 이후 학살을 사용할 수 있습니다.학살: 재키가 전기톱을 크게 휘둘러 적의 잃은 체력에 비례하여 증가하는 스킬 피해를 입힙니다");
      })
      $('.skill_t').click(function(){
        $('.skill_name').text("피의 축제");
        $('.cost').text("소모값 없음");
        $('.skill_info').text("재키가 피해를 입힌 적 실험체가 3초 내에 빈사 또는 사망에 이르게 되면 재키의 일반 스킬 쿨다운이 초기화됩니다. 재키가 스킬로 피해를 입히면 출혈을 부여합니다. 재키는 출혈 상태의 대상에게 기본 공격 적중 시 추가 스킬 피해를 입히고 출혈의 지속 시간을 갱신합니다.");
      })
  });
  $(document).ready(function(){
    $(".qwert a").click(function(){
        // 모든 img 요소에서 클래스 qwer을 제거
        $("div a img").removeClass("qwer");
        
        // 클릭한 요소의 자식 img에 클래스 qwer을 추가
        $(this).find("img").addClass("qwer");
    });
});