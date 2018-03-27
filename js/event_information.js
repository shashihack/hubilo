$(document).ready(function() {
    iconClickShowHide();
});/*Document ready ends here*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ icon click Show hide starts~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function iconClickShowHide(){
    $(".basic_information").on("click", function(e){
        window.location = "basicInfo.php?id="+id+"&type="+type;
    });

    $(".social_links").on("click", function(e){
        window.location = "socialLinks.php?id="+id+"&type="+type;
    });
    $(".contact_details").on("click", function(e){
        window.location = "contactDetails.php?id="+id+"&type="+type;
    });
    $(".registration-form-icon").on("click", function(e){
        window.location = "registrationForm.php?id="+id+"&type="+type;
    });
    $(".venue-map-icon").on("click", function(e){
        window.location = "venueMap.php?id="+id+"&type="+type;
    });
    $(".agenda-form-icon").on("click", function(e){
        window.location = "agenda.php?id="+id+"&type="+type;
    });

    $(".logo-banner-icon").on("click", function(e){
        window.location = "logoAndBanner.php?id="+id+"&type="+type;
    });
    $(".eventHighlights_icon").on("click", function(e){
        window.location = "eventHighlights.php?id="+id+"&type="+type;
    });
    $(".event_faqs").on("click", function(e){
        window.location = "faqs.php?id="+id+"&type="+type;
    });
    $(".organizing_committee").on("click", function(e){
        window.location = "organizing_committee.php?id="+id+"&type="+type;
    });
    $(".custom_file_upload").on("click", function(e){
        window.location = "custom.php?id="+id+"&type="+type;
    });
    $(".stakeholders_icon").on("click", function(e){
        window.location = "stakeholders.php?id="+id+"&type="+type;
    });

    $(".speaker_details").on("click", function(e){
        window.location = "speakers.php?id="+id+"&type="+type;
    });

    $(".sponsor_details").on("click", function(e){
        window.location = "sponsors.php?id="+id+"&type="+type;
    });

    $(".supporter_details").on("click", function(e){
        window.location = "supporters.php?id="+id+"&type="+type;
    });

    $(".exhibitor_details").on("click", function(e){
        window.location = "exhibitors.php?id="+id+"&type="+type;
    });
    $(".event_gallery").on("click", function(e){
        window.location = "event_gallery.php?id="+id+"&type="+type;
    });
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ icon click Show hide ends~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
