import React, { Component } from 'react';
import './App.css';

var LOGO = "data:image/png;base64, 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"

export default class App extends Component {
  state = {
     chcboxValue: true
   };

onChangeCheckbox = (e) => {
  this.setState({chcboxValue: e.target.checked})
}

onClickPicture = (e) => {
  this.setState({chcboxValue: !this.state.chcboxValue})
}

onChangePicture = (e) => {
  var addLogo = this.state.chcboxValue;
  var img = new Image();
  img.onload = convert;
  img.src = URL.createObjectURL(e.target.files[0]);
  function convert() {
    URL.revokeObjectURL(this.src);
    var c = document.createElement("canvas"),
    ctx = c.getContext("2d");
    var newWidth = 0;
    var newHeight = 0;
    if (this.width === this.height) {
      //carré
      newWidth = 700;
      newHeight = 700;
      c.width = newWidth;
      c.height = newHeight;
    } else if (this.width < this.height) {
      // portrait
      newWidth = this.width/this.height*700;
      newHeight = 700;
      c.width = newWidth;
      c.height = newHeight;
    } else if (this.width > this.height) {
      // paysage
      newWidth = 700;
      newHeight = this.height/this.width*700;
      c.width = newWidth;
      c.height = newHeight;
    }
    ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, newWidth, newHeight);
    if (addLogo) {
      var base_image = new Image();
      base_image.src = LOGO;
      console.log(base_image.src);
      base_image.onload = function(){
        ctx.drawImage(base_image, 10, newHeight-46);
        var img = c.toDataURL({
             format: 'jpeg',
             quality: 1
        });
        download(img);
        document.getElementById("uploadCaptureInputFile").value = "";
      }
    } else {
      var img = c.toDataURL({
           format: 'jpeg',
           quality: 1
      });
      download(img);
      document.getElementById("uploadCaptureInputFile").value = "";
    }
    function download(img) {
      var today = new Date();
      var year = String(today.getFullYear());
      if (year.length === 1) {
        year = "0"+year;
      }
      var month = String(today.getMonth()+1);
      if (month.length === 1) {
        month = "0"+month;
      }
      var day = String(today.getDate());
      if (day.length === 1) {
        day = "0"+day;
      }
      var link = document.createElement("a");
      link.href = img;
      link.setAttribute("download", day + month + year+'.jpeg');
      var b = document.createEvent("MouseEvents");
      b.initEvent("click", false, true);
      link.dispatchEvent(b);
      return false;
    }
  }
};

render() {
    return (
      <div className="App-header">
          <div>
            <input type="checkbox" checked={this.state.chcboxValue} onChange={this.onChangeCheckbox} />
            <label onClick={this.onClickPicture} className="pointer label">Ajouter Logo Moncteau News</label>
          </div>
          <br/>
          <br/>
          <input className="pointer" id="uploadCaptureInputFile" onChange={this.onChangePicture} type="file" accept="image/*" />
      </div>
    );
  }
}
