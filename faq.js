window.onload=function(){
   var faqlist,answers,questionLinks,questions,currentNode,i,j;
   faqList=document.getElementById("faq");
   answers=faqList.getElementsByTagName("dd");
   for(i=0;i<answers.length;i++)
    {

      answers[i].style.display='none';


     }

     questions=faqlist.getElementsByTagname("dt");
      for(i=0;i<questions.length;i++)
        {

            questions[i].onclick=function(){
                   currentNode=this.nextSiblings;


                   while(currentNode)
                   {  if(currentNode.nodeType=="1"&& currentNode.tagname=="DD")
                        {  if(currentNode.style.display=='none')
                             { currentNode.style.display='block';
                               }
                            else
                             {currentNode.style.display='none';}
                              }
                         break;
                    }


                      currentNode=currentNode.nextSibling;


               }
            return false;


       };
    }
