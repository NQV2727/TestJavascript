$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Get total point
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    // Get average point
    let average = sum/subject_points.length;
    $("#average_indicate").text(average);
  };
  // Get grade
  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();
    switch (true) {
      case averageIndicate >= 80:
        return "A";
        break;
      case averageIndicate >= 60:
        return "B";
        break;
      case averageIndicate >= 40:
        return "C";
        break;
      default:
        return "D";
    };
  };
  // Put all score into array, then judge result based on array
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let number = subject_points.length;
    let judge = "合格";
    // To give value to judge
    for (let i = 0; i < number; i++) {
      if (subject_points[i] < 60) {
        judge = "不合格";
        break;
      };
    };
    return judge;
  };

  // Final section's logic (judgement's logic)
  function judgement() {
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  };
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // 「最終ジャッジ」(id="btn-declaration")ボタンが押された際、「function judgement()」の処理を実行させる。
  // ２回目以降に「最終ジャッジ」ボタンを押した際は、それまでに表示していたジャッジのHTML要素を削除して、新たなジャッジのHTML要素を追加する。
  // ヒント：removeメソッドについて調べてみましょう。
  $('#btn-declaration').click(function () {
    $("#alert-indicate").remove();
    $("#declaration").text(judgement());
  });
});
