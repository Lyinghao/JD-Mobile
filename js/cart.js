/**
 * ITCAST WEB
 * Created by zhousg on 2016/5/3.
 */
window.onload = function(){
    /*
    * 1.��ʾ������
    * 2.������
    * 3.ɾ��������Ҫ��
    * 4.���ȡ����ť  �ر�  ������
    * */


    /*��ȡ������*/
    var jdWin = document.querySelector('.jd_win');
    /*��ȡ��*/
    var jdWinBox = jdWin.querySelector('.jd_win_box');
    /*��ȡ���е�ɾ����ť*/
    var deleteList = document.querySelectorAll('.deleteBox');

    /*��¼��ǰ������ǰ�����ť*/
    var deleteBtn = null;

    for(var i = 0 ; i < deleteList.length ; i ++){
        deleteList[i].onclick = function(){
            /*1.��ʾ������*/
            jdWin.style.display = "block";
            /*2.������*/
            jdWinBox.classList.add('bounceInDown');
            /*ɾ��������Ҫ��*/
            console.log(this);

            deleteBtn = this;
            var up = deleteBtn.querySelector('.up');
            console.log(up);
            /*�ӹ���*/
            up.style.webkitTransition = "all 1s";
            up.style.transition = "all 1s";
            /*������תԭ��*/
            up.style.webkitTransformOrigin = "0 5px";
            up.style.transformOrigin = "0 5px";
            /*�Ӹı�*/
            up.style.webkitTransform = "rotate(-30deg) translateY(2px)";
            up.style.transform = "rotate(-30deg) translateY(2px)";
        }
    }

    /*4.���ȡ����ť  �ر�  ������*/
    jdWinBox.querySelector('.cancel').onclick = function(){
        jdWin.style.display = "none";
        jdWinBox.classList.remove('bounceInDown');

        /*��ǰ�����*/
        if(deleteBtn){
            var up = deleteBtn.querySelector('.up');
            up.style.webkitTransform = "none";
            up.style.transform = "none";
        }
    }

};
