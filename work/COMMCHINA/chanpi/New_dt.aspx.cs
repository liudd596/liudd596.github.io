using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace COMMCHINA.chanpi
{
    public partial class New_dt : System.Web.UI.Page
    {
        int Pageindex = 1;
        int pageSize = 4;
        protected System.Text.StringBuilder newsStr = new System.Text.StringBuilder();
        protected void Page_Load(object sender, EventArgs e)
        {
            createTable();
        }

        private void createTable()
        {
            if (Request.QueryString["pageindex"] != null && Request.QueryString["pageindex"] != "")
            {
                int.TryParse(Request.QueryString["pageindex"], out Pageindex);
            }
            YTX.BLL.iNethinkCMS_Content bll = new YTX.BLL.iNethinkCMS_Content();
            DataTable dt = bll.GetListByPage(" cid=3", "", (Pageindex - 1) * pageSize + 1, Pageindex * pageSize).Tables[0];
            List<YTX.Model.iNethinkCMS_Content> list = new List<YTX.Model.iNethinkCMS_Content>();
            if (dt != null && dt.Rows.Count > 0)
            {
                list = bll.DataTableToList(dt);
            }
            int totalCount = bll.GetRecordCount(" cid=3");
            int pageCount = (int)Math.Ceiling(totalCount * 1.0 / pageSize);

            for (int i = 0; i < list.Count; i++)
            {
                newsStr.Append("<div class=\"container container_shadow\"><div class=\"page_fl\" style=\"background: url('http://www.ytx.net");
                newsStr.Append(list[i].Indexpic);
                newsStr.Append("') no-repeat center center;\"></div>");
                newsStr.Append("<div class=\"page_fr\"><h2 class=\"red\">");
                newsStr.Append(list[i].Title).Append("</h2><p>");
                //newsStr.Append("2017年5月27日，以“凝聚资源、助力双创”为主题的中小企业创业投资引导基金10年回顾与展望活动，在中关村国家自主创新示范区展示中心隆重召开。活动同时评选出十大“北京市最具成长性企业”，讯众通信、赤子城移动科技等十家企业成功入选。");
                if (!string.IsNullOrEmpty(list[i].SubTitle) && list[i].SubTitle.Length > 50)
                {
                    newsStr.Append(list[i].SubTitle.Substring(0, 50)).Append("<br/>").Append(list[i].SubTitle.Substring(50));
                }
                else
                {
                    newsStr.Append(list[i].SubTitle);
                }
                newsStr.Append("</p><span>").Append(list[i].Createtime.ToString("yyyy.MM.dd")).Append("</span><a href=\"/chanpi/New_Details.aspx?id=" + list[i].ID + "&CID=" + list[i].Cid + "#about-con\">").Append("阅读全文</a></div></div>");
                newsStr.Append("<div class=\"ht40\"></div>");
            }
            if (pageCount > 0) newsStr.Remove(newsStr.Length - 25, 24);

            newsStr.Append("<div class=\"page\"><ul>");
            if (Pageindex == 1)
            {
                newsStr.Append("<li><img src=\"img/News_tap/page_pre.png\"  alt=\"\"/></li>");
                newsStr.Append("<li class=\"on\"><a href=\"New_dt.aspx?pageindex=").Append(Pageindex).Append("\" >").Append(Pageindex).Append("</a></li>");
                for (int i = 1; i <= 2; i++)
                {
                    if (Pageindex + i <= pageCount)
                    {
                        newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex + i).Append("\" >").Append(Pageindex + i).Append("</a></li>");
                    }
                }
                if (pageCount >= 2)
                {
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=" + (Pageindex + 1) + "\"><img src=\"img/News_tap/page_next.png\" alt=\"\"/></a></li>");
                }
                else
                {
                    newsStr.Append("<li><img src=\"img/News_tap/page_next.png\" alt=\"\"/></li>");
                }
            }
            else
            {
                newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=" + (Pageindex - 1) + "\"><img src=\"img/News_tap/page_pre.png\" alt=\"\"/></a></li>");

                if (Pageindex + 1 <= pageCount)
                {
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex - 1).Append("\" >").Append(Pageindex - 1).Append("</a></li>");
                    newsStr.Append("<li class=\"on\"><a href=\"New_dt.aspx?pageindex=").Append(Pageindex).Append("\" >").Append(Pageindex).Append("</a></li>");
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex + 1).Append("\" >").Append(Pageindex + 1).Append("</a></li>");
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=" + (Pageindex + 1) + "\"><img src=\"img/News_tap/page_next.png\" alt=\"\"/></a></li>");
                }
                else if (Pageindex - 2 > 0)
                {
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex - 2).Append("\" >").Append(Pageindex - 2).Append("</a></li>");
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex - 1).Append("\" >").Append(Pageindex - 1).Append("</a></li>");
                    newsStr.Append("<li class=\"on\"><a href=\"New_dt.aspx?pageindex=").Append(Pageindex).Append("\" >").Append(Pageindex).Append("</a></li>");
                    newsStr.Append("<li><img src=\"img/News_tap/page_next.png\" alt=\"\"/></li>");
                }
                else
                {
                    newsStr.Append("<li><a href=\"New_dt.aspx?pageindex=").Append(Pageindex - 1).Append("\" >").Append(Pageindex - 1).Append("</a></li>");
                    newsStr.Append("<li class=\"on\"><a href=\"New_dt.aspx?pageindex=").Append(Pageindex).Append("\" >").Append(Pageindex).Append("</a></li>");
                    newsStr.Append("<li><img src=\"img/News_tap/page_next.png\" alt=\"\"/></li>");
                }
            }
            newsStr.Append("</ul></div>");
        }
    }
}
