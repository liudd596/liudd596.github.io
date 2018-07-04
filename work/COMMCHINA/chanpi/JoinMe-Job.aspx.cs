using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace COMMCHINA.chanpi
{
    public partial class JoinMe_Job : System.Web.UI.Page
    {
        protected System.Text.StringBuilder newsStr = new System.Text.StringBuilder();
        protected void Page_Load(object sender, EventArgs e)
        {
            createTable();
        }

        private void createTable()
        {
            int cid = 7;
            YTX.BLL.iNethinkCMS_Content bll = new YTX.BLL.iNethinkCMS_Content();
            DataTable dt = bll.GetListByPage(" cid=" + cid, " id asc", 1, 100).Tables[0];
            List<YTX.Model.iNethinkCMS_Content> list = new List<YTX.Model.iNethinkCMS_Content>();
            if (dt != null && dt.Rows.Count > 0)
            {
                list = bll.DataTableToList(dt);
            }
            int totalCount = bll.GetRecordCount(" cid=" + cid);
            //totalCount = 9;
            for (int i = 1; i <=totalCount; i++)
            {
                if (i % 4 == 1)
                {
                    newsStr.Append("<ul>");
                }
                newsStr.Append("<li class=\"ui-list-jobli" + i + "\" onmouseover=\"my0ver(" + i + ")\"><img src=\"http://www.ytx.net");
                //newsStr.Append("img/page_img/ui-list-job" + i + ".jpg");
                newsStr.Append(list[i - 1].Indexpic);
                newsStr.Append("\" alt=\"\" /><a class=\"ui-job\" href=\"").Append("JoinMe-JobDetails.aspx?id=" + list[i - 1].ID);
                newsStr.Append("\"><div class=\"ui-job-text\"><h3>").Append(list[i - 1].Title).Append("</h3></div>");
                newsStr.Append("<div class=\"ui-job-textbg ui-job-textbg" + i).Append("\">");
                newsStr.Append("<h3>").Append(list[i - 1].Title).Append("</h3><span class=\"span1\">");
                if (list[i - 1].SubTitle.Length > 22)
                {
                    newsStr.Append(list[i - 1].SubTitle.Substring(0, 22));
                }
                else
                {
                    newsStr.Append(list[i - 1].SubTitle);
                }
                newsStr.Append("</span><span class=\"span-btn\">立即申请</span>");
                newsStr.Append("</div></a></li>");
                if (i % 4 == 0)
                {
                    newsStr.Append("</ul>");
                }
            }
            if (totalCount % 4 != 0)
            {
                newsStr.Append("<li class=\"ui-list-jobli0\"><img src=\"img/page_img/ui-list-job0.jpg\" alt=\"\"/></li></ul>");
            }
            else
            {
                newsStr.Append("<ul><li class=\"ui-list-jobli0\"><img src=\"img/page_img/ui-list-job0.jpg\" alt=\"\"/></li></ul>");
            }
            //contentText = ic.Contents.Replace("<img src=\"", "<img src=\"http://www.ytx.net");
        }
    }
}
