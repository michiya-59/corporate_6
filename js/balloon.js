'use strict'

window.addEventListener('load', () => {
  const student_voice_part1 = document.getElementById('student_voice_part1');
  const student_voice_part2 = document.getElementById('student_voice_part2');
  const student_voice_part3 = document.getElementById('student_voice_part3');
  
  window.addEventListener('scroll', () => {
    const student_voice_part1_fedein = student_voice_part1.getBoundingClientRect().top;
    const student_voice_part2_fedein = student_voice_part2.getBoundingClientRect().top;
    const student_voice_p3_fedein = student_voice_part3.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (windowHeight > student_voice_part1_fedein + 100){
      student_voice_part1.classList.add('student_content_fedin');
    }
    if (windowHeight > student_voice_part2_fedein + 100){
      student_voice_part2.classList.add('student_content_fedin');
    }
    if (windowHeight > student_voice_p3_fedein + 100){
      student_voice_part3.classList.add('student_content_fedin');
    }
  });
});