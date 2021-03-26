<footer>

      

            <div id="demande_essai_gratuit" class="row bg_parallax" style="background-image:url('http://texascardiology.co/assets/img/footer_blue_plus.jpg');">
        <div class="col-12 col-lg-5">
          <p class="suptitle"></p>
          <p class="d-none d-sm-block">
            Contact us for all your cardiac related concerns        </p>
          <a href="#" class="d-sm-none">
            Contact us for all your cardiac related concerns 
          </a>
        </div>
        <div class="col-12 col-lg-7 d-flex justify-content-start justify-content-lg-end align-items-center">
          <div class="wrap_choices">
            <div id="footer-choices_pill_animation"></div>
            <a class="btn btn-essai" href="#" data-action="open" data-target="#pale_blue_aside" data-code="!demonstration!">Fill the form </a>
            <a class="btn btn-joindre" href="https://texascardiology.co/contact/">Contact Us </a>
          </div>
        </div>
      </div>
      
      <div id="premier_fournisseur_mondial" class="row">
        <div class="col-12 col-lg-7">
          <p class="huge_title wow fadeInLeft" data-wow-duration="2s" data-wow-offset="100">
            Providing the highest quality of care          </p><br><br>
          <p class="small_title wow fadeInLeft" data-wow-duration="2s" data-wow-offset="100">
            Telehealth Appointment Available          </p>
        </div>
        <div class="col-12 col-lg-3 offset-lg-2">
          <div class="wrap_footer_choices d-flex flex-column justify-content-center align-items-start align-items-lg-end wow fadeInRight" data-wow-duration="1s" data-wow-offset="100">
                      </div>
        </div>
      </div>

      <div id="wrap-all_rights_reserved" class="row justify-content-center align-items-center">
        <div class="col-6">
          <div class="all_rights_reserved wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0s">
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div class="col-6">
          <div class="text-right wow fadeInRight" data-wow-duration="1s" data-wow-delay="0s">
            <a href="https://ibridgedigital.com/" target="_blank" id="link_em">Website Design by Ibridge Digital</a>
          </div>
        </div>
      </div>
    </footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script>
                    $(document).ready(function() { 
                        $('#frmBookapp').submit(function(event) {
                          event.preventDefault();
                          var formdata = $('#frmBookapp').serialize();

                            if ($('#namebook').val() != "" && $('#emailbook').val() != "" && $('#phonebook').val() != "" && $('#symtombook').val() != "") {
                                
                                 $.ajax({
                                          url:'bookapp.php',
                                          type:'POST',
                                          data:formdata,
                                          success:function(result){ 
                                          alert("Information Sent");                                                  
                                             document.getElementById("frmBookapp").reset();   

                                          }
                                        });
                                      }
                                 else{
                                  alert("All fields are mandatory");
                                      }
                        });
                    });

</script>
<!-- <script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || 
{widgetcode:"feeb46994642579b1cff2b2b84d7e32bf2cda1113eb1ab119fb74f77cf80eb8926cbd6d5b94d07d71eaf2cdf704a2ebd", values:{},ready:function(){}};
var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script> -->

<script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"54b5afc677ad8db5b203c36900a462300d2c05bc97acb41a91d79eb76341da6db3fa170b1e251de070b35fa5888947cc", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script>