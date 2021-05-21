        document.addEventListener('DOMContentLoaded', function(){
                var trigger = new ScrollTrigger();
        });
        var Ind=-1;
        myfn();
        function myfn()
        {
                var i;
                var slides=document.getElementsByClassName("simages");
                for(i=0;i<slides.length;i++)
                {
                        slides[i].style.display="none";
                }
                Ind++;
                if(Ind>=slides.length)
                {
                        Ind=0;
                }
                slides[Ind].style.display="block";
                setTimeout(myfn, 3000);
        }

