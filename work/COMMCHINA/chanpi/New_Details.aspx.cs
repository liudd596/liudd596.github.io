using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace COMMCHINA.chanpi
{
    public partial class New_Details : System.Web.UI.Page
    {
        protected string contentTitle = string.Empty;
        protected string contentCrdate = string.Empty;
        protected string contentText = string.Empty;
        protected string previousString = string.Empty;
        protected string nextString = string.Empty;
        protected string newCidPage = string.Empty;
        protected string dtON = string.Empty;
        protected string mtON = string.Empty;
        protected string hyON = string.Empty; 
        YTX.Model.iNethinkCMS_Content ic = null;
        protected void Page_Load(object sender, EventArgs e)
        {
            int id = 0; int cid = 0;
            if (Request.QueryString["id"] != null && Request.QueryString["id"] != "")
            {
                int.TryParse(Request.QueryString["id"], out id);
            }
            if (Request.QueryString["cid"] != null && Request.QueryString["cid"] != "")
            {
                int.TryParse(Request.QueryString["cid"], out cid);
            }
            YTX.BLL.iNethinkCMS_Content icbll = new YTX.BLL.iNethinkCMS_Content();
            YTX.Model.iNethinkCMS_Content Model_Previous = new YTX.Model.iNethinkCMS_Content();
            YTX.Model.iNethinkCMS_Content Model_Next = new YTX.Model.iNethinkCMS_Content();
            if (id > 0)
            {
                ic = icbll.GetModel(id);
            }
            else
            {
                ic = icbll.GetList(1, " cid=" + cid, " id desc").FirstOrDefault();
            }
            if (cid == 0 && ic!=null)
            {
                cid = ic.Cid;
            }
            switch (cid) {
                case 3: newCidPage = "New_dt.aspx#about-con"; dtON = "on"; break;
                case 4: newCidPage = "New_mt.aspx#about-con"; mtON = "on"; break;
                case 5: newCidPage = "New_hy.aspx#about-con"; hyON = "on"; break;
                default: newCidPage = "New_dt.aspx#about-con"; dtON = "on"; break;
            }
            if (ic != null)
            {
                contentTitle = ic.Title;
                contentCrdate = ic.Createtime.ToString("yyyy.MM.dd");
                contentText = ic.Contents.Replace("<img src=\"", "<img src=\"http://www.ytx.net");
                Model_Previous = icbll.GetModel_Previous(id, cid);
                Model_Next = icbll.GetModel_Next(id, cid);
                
                if (Model_Next != null)
                    nextString = "<a href='New_Details.aspx?id=" + Model_Next.ID.ToString() + "#about-con' class='a1' >上一篇: " + Model_Next.Title + "</a>";
                if (Model_Previous != null)
                    previousString = "<a href='New_Details.aspx?id=" + Model_Previous.ID.ToString() + "#about-con' class='a2' >下一篇: " + Model_Previous.Title + "</a>";

            }

        }
    }
}
