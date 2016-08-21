/**
 * Created by yangjianzhong on 16/7/22.
 */
(function () {
    var oBox=document.getElementById("box");
    var aHead=oBox.getElementsByTagName("div")[0];
    var oUl=aHead.getElementsByTagName("ul")[0];
    var liMap=utils.getByClass(oUl,"map")[0];
    var aMapList=oBox.getElementsByTagName("div")[2];
    tab();
    function tab() {
        liMap.onmouseenter=function (e) {
            aMapList.style.display = "block";
            e = e || window.event;
            var tar = e.target || e.srcElement;
                if (tar.className === "map-list") {
                    aMapList.style.display = "block";
                }
                e.preventDefault() ? e.stopPropagation() : e.returnValue = false;
        };

        document.body.onmouseout=function () {
            // aMapList.style.display="none";
        };
    }

})()


