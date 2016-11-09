    mobileCountryCheck : function(){
        var mess;
        var parentDiv = jQuery(this.rules.mobileCountry[6]); // .sub-item
        var mobileDiv = jQuery(this.rules.mobileCountry[1]); // .mobile-no
        var countryID = jQuery(this.rules.mobileCountry[0]).val(); // .mobile-country option:selected .val();
        var countryText = jQuery(this.rules.mobileCountry[0]).text().split('(')[0];
        //var mobileElem = mobileDiv.val(); // .mobile-no .val();
        //var mobileElemNew = mobileDiv.val();

        switch (countryID) {
            case '61':// AU
                jQuery(this.rules.mobileCountry[1]).val('4');
                mess = countryText + this.rules.mobileCountry[4];
                break;
            case '64':// New Zealand
                jQuery(this.rules.mobileCountry[1]).val('2');
                mess = countryText + this.rules.mobileCountry[4];
                break;
            case '':// No select
                jQuery(this.rules.mobileCountry[1]).val('');
                mess = 'Invalid mobile number';
                break;
            default:// Other country
                jQuery(this.rules.mobileCountry[1]).val('');
                mess = countryText + this.rules.mobileCountry[2];
        }
        mobileDiv.removeClass('error');
        mobileDiv.closest(parentDiv).find('.valid-msg .error').html(mess).css('display', 'none');

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
