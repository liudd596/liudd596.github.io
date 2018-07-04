using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace COMMCHINA.chanpi
{
    public partial class JoinMe_JobDetails : System.Web.UI.Page
    {
        protected string contentTitle = string.Empty;
        protected string contentText = string.Empty;
        protected string contentText1 = string.Empty;
        protected string contentText2 = string.Empty;
        
        protected void Page_Load(object sender, EventArgs e)
        {
            YTX.BLL.iNethinkCMS_Content icbll = new YTX.BLL.iNethinkCMS_Content();
            List<YTX.Model.iNethinkCMS_Content> ic = new List<YTX.Model.iNethinkCMS_Content>();
            ic = icbll.GetList(0, "cid=7", " id desc");
            if (ic.Count > 0)
            {
                for (int i = 0; i < ic.Count; i++)
                {
                    contentText += "<div class=\"info_list\"><h6>" + ic[i].Title + "</h6><div class=\"detail detail_tec1\">" + ic[i].Contents.Replace("<img src=\"", "<img src=\"http://www.ytx.net") + "<p><a href=\"javascript:void(0)\" onclick=\"alertjob('" + ic[i].Title + "')\" class=\"ui-list-job-a1\">申请职位</a></p>" + "</div></div>";
 
                }
                contentText += "<div class=\" clearfix\"></div>";
            }

            List<YTX.Model.iNethinkCMS_Content> ic1 = new List<YTX.Model.iNethinkCMS_Content>();
            ic1 = icbll.GetList(0, "cid=14", " id desc");
            if (ic1.Count > 0)
            {
                for (int i = 0; i < ic1.Count; i++)
                {
                    contentText1 += "<div class=\"info_list\"><h6>" + ic1[i].Title + "</h6><div class=\"detail detail_tec1\">" + ic1[i].Contents.Replace("<img src=\"", "<img src=\"http://www.ytx.net") + "<p><a href=\"javascript:void(0)\" onclick=\"alertjob('" + ic1[i].Title + "')\" class=\"ui-list-job-a1\">申请职位</a></p>" + "</div></div>";
                    if (i % 2 == 1)
                    {
                        contentText1 += "<div class=\" clearfix\"></div>";
                    }
                }
            }

            List<YTX.Model.iNethinkCMS_Content> ic2 = new List<YTX.Model.iNethinkCMS_Content>();
            ic2 = icbll.GetList(0, "cid=15", " id desc");
            if (ic2.Count > 0)
            {
                for (int i = 0; i < ic2.Count; i++)
                {
                    contentText2 += "<div class=\"info_list\"><h6>" + ic2[i].Title + "</h6><div class=\"detail detail_tec1\">" + ic2[i].Contents.Replace("<img src=\"", "<img src=\"http://www.ytx.net") + "<p><a href=\"javascript:void(0)\" onclick=\"alertjob('" + ic2[i].Title + "')\" class=\"ui-list-job-a1\">申请职位</a></p>" + "</div></div>";
                    if (i % 2 == 1)
                    {
                        contentText2 += "<div class=\" clearfix\"></div>";
                    }
                }
            }
        }
    }
}
