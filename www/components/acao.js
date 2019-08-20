$(document).on("click","#codigoBarra",function(){
  cordova.plugins.barcodeScanner.scan(
    function (result){
      navigator.notification.alert("Leitura do Código de Barra\n" +
      "Resultado: " + result.text + "\n" +
      "Formato: " + result.format + "\n" +
      "Cancelado: " + result.cancelled)
    },
    function (error){
      navigator.notification.alert("Scanning failed: " + error);
    },
    {
      preferFrontCamera: false,
      showFlipCameraButton : true,
      showTorchButton : true,
      torchOn : false,
      saveHistory : true,
      prompt : "Place a barcode inside the scan area",
      resultDisplayDuration : 500,
      formats : "QR_CODE,PDF_417,CODE_39",
      orientation : "landscape",
      disableAnimations : true,
      disableSuccessBeep : false
    }
  );
});