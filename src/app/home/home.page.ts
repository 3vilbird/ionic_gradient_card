import { Component } from "@angular/core";
import { SmsRetriever } from "@ionic-native/sms-retriever/ngx";
import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  hash: any;
  tempUrl =
    "https://image.freepik.com/free-photo/butterfly-fly-morning-nature_38810-486.jpg";
  constructor(
    private smsRetriever: SmsRetriever,
    private photoViewer: PhotoViewer
  ) {}

  genHash() {
    // This function is to get hash string of APP.
    // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
    this.smsRetriever
      .getAppHash()
      .then((res: any) => {
        console.log(res);
        alert(res);
        this.hash = res;
      })
      .catch((error: any) => console.error(error));
  }

  retriveSMS() {
    console.log("Watching SMS");
    this.smsRetriever
      .startWatching()
      .then((res: any) => {
        console.log(res);
        //  <#> 323741 is your 6 digit OTP for MyApp. LDQEGVDEvcl
        const otp = res.Message.toString().substr(4, 6);
        alert(`OTP Received - ${otp}`);
      })
      .catch((error: any) => console.error(error));
  }

  // photo viewer

  showphoto = () => {
    this.photoViewer.show(this.tempUrl);

    // this.photoViewer.show(
    //   "https://mysite.com/path/to/image.jpg",
    //   "My image title",
    //   { share: false }
    // );

    // this.photoViewer.show(
    //   "https://mysecuresite.com/path/to/image.jpg",
    //   "My image title",
    //   { share: false, headers: "{username:foo,password:bar}" }
    // );
  };
}
