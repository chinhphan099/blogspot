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
        return true;
    },
    countryCheck: function() {
        /*
        country: [
            '.mobile-country option:selected',
            ' is invalid',
            ' MOBILE NUMBER MUST BE BETWEEN 6-14 DIGITS',
            ' MOBILE NUMBER MUST BE BETWEEN 2-23 DIGITS',
            /^[0-9]*$/i,
            '.mobile-no',
            '.sub-item' ]
        */
        var countryID = jQuery(this.rules.country[0]).val(); // option:selected .val()
        var countryText = jQuery(this.rules.country[0]).text().split('(')[0].trim();
        //hot fix
        var mobileDiv = jQuery(this.rules.country[5]); // .mobile-no
        var parentDiv = jQuery(this.rules.country[6]); // .sub-item
        //mobileDiv.removeClass('error');
        //mobileDiv.parent(parentDiv).find('.valid-msg .error').css('display', 'none');

        if (!(this.rules.country[4].test(this.currentVal)) ) {
            this.errorText = this.currentVal + this.rules.country[1];
            return false;
        }else if (countryID == '64' || countryID == '61') {
            if (this.currentVal.length >= 6 && this.currentVal.length <= 14) {
                if (countryID == '64') {
                    if (/^(02|2)/.test(this.currentVal)) {
                        return true;
                    } else {
                        this.errorText = this.currentVal + this.rules.country[1];
                        return false;
                    }
                } else if (countryID == '61') {
                    if (/^(04|4)/.test(this.currentVal)) {
                        return true;
                    } else {
                        this.errorText = this.currentVal + this.rules.country[1];
                        return false;
                    }
                }
            } else {
                this.errorText = countryText + this.rules.country[2];
                return false;
            }
        } else if(countryID != "") {
            if (this.currentVal.length >= 2 && this.currentVal.length <= 23) {
                return true;
            } else {
                this.errorText = countryText + this.rules.country[3];
                return false;
            }
        }
    },


