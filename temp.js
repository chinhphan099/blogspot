    mobileCountryCheck : function(){
        var countryID = jQuery(this.rules.mobileCountry[0]).val();
        var mobileElem = jQuery(this.rules.mobileCountry[1]).val();


        if(countryID == '64' /*&&  (mobileElem.length == '' || mobileElem == '04')*/ ){
            jQuery(this.rules.mobileCountry[1]).val('2');
        } else if(countryID == '61' /*&& (mobileElem.length == '' || mobileElem == '02') */) {
            jQuery(this.rules.mobileCountry[1]).val('4');
        }else {
            jQuery(this.rules.mobileCountry[1]).val('');
        }
        //s60 - temp solution - hot fix

        var mobileDiv = jQuery(this.rules.mobileCountry[1]);
        var mobileElemNew = jQuery(this.rules.mobileCountry[1]).val();
        var mobileElem = jQuery(this.rules.mobileCountry[1]).val();
        var parentDiv = jQuery(this.rules.mobileCountry[6]);

        var countryText = jQuery(this.rules.mobileCountry[0]).text().replace(countryID,'').replace('()', '');
        mobileDiv.removeClass('error');
        mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[4]).css('display', 'none');

        //if(mobileElemNew != ''/* && mobileElemNew != '02' */){
            /*
            var countryText = jQuery(this.rules.mobileCountry[0]).text().replace(countryID,'').replace('()', '');
            if (!(this.rules.mobileCountry[5].test(mobileElem)) ) {
                mobileDiv.addClass('error');
                mobileDiv.parent(parentDiv).find('.valid-msg .error').html(mobileElem + this.rules.mobileCountry[2]).css('display', 'block');
                //mobileDiv.errorText = mobileElem + this.rules.mobileCountry[2];

            }else if (countryID == '64' || countryID == '61') {
                if (mobileElem.length >= 6 && mobileElem.length <= 14) {
                    if (countryID == '64') {
                        if (/^(02|2)/.test(mobileElem)) {
                            mobileDiv.removeClass('error');
                            mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[4]).css('display', 'none');
                        } else {
                            mobileDiv.addClass('error');
                            mobileDiv.parent(parentDiv).find('.valid-msg .error').html(mobileElem + this.rules.mobileCountry[2]).css('display', 'block');
                        }
                    } else if (countryID == '61') {
                        if (/^(04|4)/.test(mobileElem)) {
                            mobileDiv.removeClass('error');
                            mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[4]).css('display', 'none');
                        } else {
                            mobileDiv.addClass('error');
                            mobileDiv.parent(parentDiv).find('.valid-msg .error').html(mobileElem + this.rules.mobileCountry[2]).css('display', 'block');
                        }
                    }
                } else {
                    mobileDiv.addClass('error');
                    mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[3]).css('display', 'block');
                }
            } else if(countryID != "") {
                if (mobileElem.length >= 2 && mobileElem.length <= 23) {
                    mobileDiv.removeClass('error');
                    mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[4]).css('display', 'none');
                } else {
                    mobileDiv.addClass('error');
                    mobileDiv.parent(parentDiv).find('.valid-msg .error').html(countryText + this.rules.mobileCountry[4]).css('display', 'block');
                }
            }
            */
        //}
        return true ;
    },