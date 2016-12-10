/**
 * ITCAST WEB
 * Created by zhousg on 2016/5/3.
 */
window.onload = function(){
    leftSwipe();
    itcast.iScroll({
        swipeDom:document.querySelector('.jd_category_right'),
        swipeType:'y',
        swipeDistance:100
    });
};
/*���Ļ���Ч��*/
function leftSwipe(){
    /*
    * 1.����  touch
    * 2.��һ�������䷶Χ��  ����  ͨ������  ������λ�������ʵ��
    * 3.��һ���������� ����λ     ��λ����
    * 4.���  ����������  �ı䵱ǰ����ʽ   ���������ײ���ʱ����Ҫ����λ  tap
    * */

    /*��ȡdomԪ��*/
    /*������*/
    var parentBox = document.querySelector('.jd_category_left');
    /*�Ӻ���*/
    var childBox = parentBox.querySelector('ul');

    var parentHeight = parentBox.offsetHeight;
    var childHeight = childBox.offsetHeight;

    /*��λ����*/
    var maxPosition = 0;//���Ķ�λ����
    var minPosition = parentHeight-childHeight;//��С�Ķ�λ����

    /*����ľ���*/
    var distance = 150;

    /*��������*/
    var maxSwipe = maxPosition + 150; // ��󻬶�����
    var minSwipe = minPosition - 150; // ��С��������


    /*��ӹ���*/
    var addTransition = function () {
        childBox.style.webkitTransition = "all .2s";/*����*/
        childBox.style.transition = "all .2s";
    };
    /*ɾ������*/
    var removeTransition = function () {
        childBox.style.webkitTransition = "none";/*����*/
        childBox.style.transition = "none";
    };
    /*�ı�λ��*/
    var setTranslateY = function(translateY){
        childBox.style.webkitTransform = "translateY("+translateY+"px)";
        childBox.style.transform = "translateY("+translateY+"px)";
    };

    /*1.����  touch*/
    /*����*/
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
/*
    var isMove = false;
*/

    /*��¼��ǰ��λ*/
    var currY = 0;

    childBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e){
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;

        /*2.��һ�������䷶Χ��  ����  ͨ������  ������λ�������ʵ��*/
        /*���ǽ�Ҫȥ����λ��λ�� Ҫ��  �������䷶Χ��*/
        if((currY + distanceY) < maxSwipe && (currY + distanceY) > minSwipe){
            /*ɾ������*/
            removeTransition();
            /*����λ*/
            setTranslateY(currY + distanceY);
        }

    });
    /*����ģ�����ϵ�bug����   �¼�ð�ݻ���*/
    window.addEventListener('touchend',function(e){
        /*3.��һ���������� ����λ     ��λ����*/
        /*��Ҫ��λ��λ�� ����  ���λ��ʱ��*/
        if((currY + distanceY) > maxPosition){
            currY = maxPosition;
            /*�ӹ���*/
            addTransition();
            /*����λ��*/
            setTranslateY(currY);
        }
        /*��Ҫ��λ��λ�� С��  ��С��λ��ʱ��*/
        else  if ((currY + distanceY) < minPosition){
            currY = minPosition;
            /*�ӹ���*/
            addTransition();
            /*����λ��*/
            setTranslateY(currY);
        }
        /*����*/
        else {
            /*���õ�ǰ�Ķ�λ*/
            currY = currY + distanceY;
        }

        /*���ò���*/
        startY = 0;
        moveY = 0;
        distanceY = 0;
    });

    /*4.���  ����������  �ı䵱ǰ����ʽ   ���������ײ���ʱ����Ҫ����λ  tap*/
    var lis = childBox.querySelectorAll('li');
    itcast.tap(childBox,function(e){
        /*���������ĵ�ǰ��ʽ*/
        for(var i =0;i<lis.length;i++){
            lis[i].className = " ";
            lis[i].index = i;
        }
        var li = e.target.parentNode;/*��ǰ�����li*//*����Դ*/
        li.className = 'now';
        /*��Ҫ֪����ǰ����Ҫȥ��λ��λ��  �������*/
        console.log(li.index);

        var translateY = -li.index * 50;/*���ϻ���*/

        /*����������С��λ����  ���ܶ�λ*/
        /*���㶨λ*/
        if(translateY > minPosition){
            currY = translateY;
            /*�ӹ���*/
            addTransition();
            /*ȥ����λ*/
            setTranslateY(currY);
        }else{
            currY = minPosition;
            /*�ӹ���*/
            addTransition();
            /*ȥ����λ*/
            setTranslateY(currY);
        }

    });

}