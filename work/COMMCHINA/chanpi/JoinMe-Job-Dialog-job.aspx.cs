using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Net.Mail;
using System.Net;

namespace COMMCHINA.chanpi
{
    public partial class JoinMe_Job_Dialog_job : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request["jobName"] != null || Request["jobName"] != "")
                {
                    this.jobname.Text = Request["jobName"];
                }
            }
        }

        protected void btn_Click(object sender, EventArgs e)
        {
            string name = string.Empty; string jobname = string.Empty; string mobile = string.Empty;
            string email = string.Empty; string tipNote = string.Empty; string fullname = string.Empty;
            if (Request["name"] != null || Request["name"] != "")
            {
                name = Request["name"];
                this.name.Text = name;
            }
            if (Request["jobname"] != null || Request["jobname"] != "")
            {
                jobname = Request["jobname"];
                this.jobname.Text = jobname;
            }
            if (Request["mobile"] != null || Request["mobile"] != "")
            {
                mobile = Request["mobile"];
                this.mobile.Text = mobile;
            }
            if (Request["email"] != null || Request["email"] != "")
            {
                email = Request["email"];
                this.email.Text = email;
            }
            if (Request["tipNote"] != null || Request["tipNote"] != "")
            {
                tipNote = Request["tipNote"];
                this.tipNote.Text = tipNote;
            }
            if (upload.HasFile)
            {
                string ext = System.IO.Path.GetExtension(upload.FileName);//获取上传文件的文件名以及后缀名
                if (!(ext == ".doc" || ext == ".docx"))
                {
                    YTX.Common.MessageBox.Show(this, "请上传doc|docx格式的文件！");
                    return;
                }
                string _filename = name + "-" + jobname + "-" + mobile + "-" + email + "-" + tipNote + "-" + DateTime.Now.ToString("yyyyMMddhhmmss");
                fullname = Server.MapPath("~\\tempWord") + "\\" + _filename + ext;
                try
                {
                    upload.SaveAs(fullname); // 使用 SaveAs 方法保存文件
                }
                catch (Exception ex)
                {
                    YTX.Common.MessageBox.Show(this, "提示：提交失败");
                    return;
                }
            }
            SendMailHander hander = new SendMailHander(sendMail);
            hander.BeginInvoke(name, jobname, mobile, email, tipNote, fullname, null, null);
            YTX.Common.MessageBox.ResponseScript(this, "alert('提示：提交成功');window.parent.location.reload();");
        }
        protected delegate void SendMailHander(string name, string jobname, string mobile, string email, string tipNote, string fullname);
        protected void sendMail(string name, string jobname, string mobile, string email, string tipNote, string fullname)
        {
            var emailAcount = ConfigurationManager.AppSettings["EmailAcount"];
            var emailReciver1 = ConfigurationManager.AppSettings["emailReciver1"];
           // var emailReciver2 = ConfigurationManager.AppSettings["emailReciver2"];
            var emailPassword = ConfigurationManager.AppSettings["EmailPassword"];
            var content = "姓名：" + name + "|"
                       + "应聘职位：" + jobname + "|"
                       + "电话：" + mobile + "|"
                       + "邮箱：" + email + "|"
                       + "说明：" + tipNote + "|"
                       + "提交时间：" + DateTime.Now;
            MailMessage message = new MailMessage();
            //设置发件人,发件人需要与设置的邮件发送服务器的邮箱一致
            if (!string.IsNullOrEmpty(fullname))
            {
                message.Attachments.Add(new Attachment(fullname));
            }
            MailAddress fromAddr = new MailAddress(emailAcount);
            message.From = fromAddr;
            //设置收件人,可添加多个,添加方法与下面的一样
            message.To.Add(emailReciver1);
            //message.To.Add(emailReciver2);
            //message.To.Add(mail);
            //设置抄送人
            // message.CC.Add("niejm@commchina.net");
            //设置邮件标题
            message.Subject = "讯众官网招聘简历";
            //设置邮件内容
            message.Body = content;
            //设置邮件发送服务器,服务器根据你使用的邮箱而不同,可以到相应的 邮箱管理后台查看,下面是QQ的
            SmtpClient client = new SmtpClient("smtp.exmail.qq.com", 25);//smtp.exmail.qq.com
            
            //设置发送人的邮箱账号和密码
            client.Credentials = new NetworkCredential(emailAcount, emailPassword);
            //启用ssl,也就是安全发送
            client.EnableSsl = true;
            //发送邮件
            client.Send(message);
        }
    }
}
