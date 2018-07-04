using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace COMMCHINA.chanpi
{
    public partial class TZi_mt : System.Web.UI.Page
    {
        protected System.Text.StringBuilder newsStrCid8 = new System.Text.StringBuilder();
        protected System.Text.StringBuilder newsStrCid9 = new System.Text.StringBuilder();
        protected System.Text.StringBuilder newsStrCid10 = new System.Text.StringBuilder();
        protected void Page_Load(object sender, EventArgs e)
        {
            createTable();
        }

        private void  createTable()
        {
            YTX.BLL.iNethinkCMS_Content bll = new YTX.BLL.iNethinkCMS_Content();
            DataSet ds = bll.GetListCommChinaNewsByCid(8, "*", "8,9,10", " id desc");
            List<YTX.Model.iNethinkCMS_Content> list = new List<YTX.Model.iNethinkCMS_Content>();
            DataTable dt = new DataTable();
            for (int i = 0; i < ds.Tables.Count; i++)
            {
                dt =ds.Tables[i];
                if (dt != null && dt.Rows.Count > 0)
                {
                    list.AddRange(bll.DataTableToList(dt));
                }
            }
            foreach( YTX.Model.iNethinkCMS_Content item in list)
            {
                if (item.Cid ==8)
                {
                    newsStrCid8.Append("<div class=\"ui-table-top ui-table-con\" ><a href=\"");
                    newsStrCid8.Append(item.Contents);
                    newsStrCid8.Append("\" target=\"_blank\" ><ul><li><i class=");
                    newsStrCid8.Append("\"i_1\"></i><span>832646</span></li><li><span>");
                    if (item.Title.Length > 16)
                    {
                        newsStrCid8.Append(item.Title.ToString().Substring(0, 16) + "...");
                    }
                    else
                    {
                        newsStrCid8.Append(item.Title);
                    }
                    newsStrCid8.Append("</span><i class=\"i_2\"></i></li><li class=\"li_3\"><span>").Append(item.SubTitle);
                    newsStrCid8.Append("</span></li><div class=\"clearfix\"></div></ul></a></div>");
                }
                if (item.Cid == 9)
                {
                    newsStrCid9.Append("<div class=\"ui-table-top ui-table-con\" ><a href=\"");
                    newsStrCid9.Append(item.Contents);
                    newsStrCid9.Append("\" target=\"_blank\" ><ul><li><i class=");
                    newsStrCid9.Append("\"i_1\"></i><span>832646</span></li><li><span>");
                    if (item.Title.Length > 16)
                    {
                        newsStrCid9.Append(item.Title.ToString().Substring(0, 16) + "...");
                    }
                    else
                    {
                        newsStrCid9.Append(item.Title);
                    }
                    newsStrCid9.Append("</span><i class=\"i_2\"></i></li><li class=\"li_3\"><span>").Append(item.SubTitle);
                    newsStrCid9.Append("</span></li><div class=\"clearfix\"></div></ul></a></div>");
                }
                if (item.Cid == 10) {
                    newsStrCid10.Append("<div class=\"ui-table-top ui-table-con\" ><a href=\"");
                    newsStrCid10.Append(item.Contents);
                    newsStrCid10.Append("\" target=\"_blank\" ><ul><li><i class=");
                    newsStrCid10.Append("\"i_1\"></i><span>832646</span></li><li><span>");
                    if (item.Title.Length > 16)
                    {
                        newsStrCid10.Append(item.Title.ToString().Substring(0, 16) + "...");
                    }
                    else
                    {
                        newsStrCid10.Append(item.Title);
                    }
                    newsStrCid10.Append("</span><i class=\"i_2\"></i></li><li class=\"li_3\"><span>").Append(item.SubTitle);
                    newsStrCid10.Append("</span></li><div class=\"clearfix\"></div></ul></a></div>");
                }
            }
        }
    }
}
