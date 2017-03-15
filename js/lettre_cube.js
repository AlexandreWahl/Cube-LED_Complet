function convertCharCodeToLetter(input) {

    var letter = input.match(new RegExp("[A-Z0-9$€!?]", 'i'));

    if(letter != null) {
        var letters = {
            A: "--------" +
            "---###--" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-" +
            "--#---#-" +
            "--#---#-",
            B: "--------" +
            "--####--" +
            "--#---#-" +
            "--#---#-" +
            "--####--" +
            "--#---#-" +
            "--#---#-" +
            "--####--",
            C: "--------" +
            "---###--" +
            "--#---#-" +
            "--#-----" +
            "--#-----" +
            "--#-----" +
            "--#---#-" +
            "---###--",
            D: "--------" +
            "--####--" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--####--",
            E: "--------" +
            "--#####-" +
            "--#-----" +
            "--#-----" +
            "--####--" +
            "--#-----" +
            "--#-----" +
            "--#####-",
            F: "--------" +
            "--#####-" +
            "--#-----" +
            "--#-----" +
            "--####--" +
            "--#-----" +
            "--#-----" +
            "--#-----",
            G: "--------" +
            "---###--" +
            "--#---#-" +
            "--#-----" +
            "--#-----" +
            "--#--##-" +
            "--#---#-" +
            "---###--",
            H: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-",
            I: "--------" +
            "---###--" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "---###--",
            J: "--------" +
            "------#-" +
            "------#-" +
            "------#-" +
            "------#-" +
            "--#---#-" +
            "--#---#-" +
            "---###--",
            K: "--------" +
            "--#---#-" +
            "--#--#--" +
            "--#-#---" +
            "--##----" +
            "--#-#---" +
            "--#--#--" +
            "--#---#-",
            L: "--------" +
            "--#-----" +
            "--#-----" +
            "--#-----" +
            "--#-----" +
            "--#-----" +
            "--#-----" +
            "--#####-",
            M: "--------" +
            "--#---#-" +
            "--##-##-" +
            "--#-#-#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-",
            N: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--##--#-" +
            "--#-#-#-" +
            "--#--##-" +
            "--#---#-" +
            "--#---#-",
            O: "--------" +
            "---###--" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "---###--",
            P: "--------" +
            "--####--" +
            "--#---#-" +
            "--#---#-" +
            "--####--" +
            "--#-----" +
            "--#-----" +
            "--#-----",
            Q: "--------" +
            "---###--" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#-#-#-" +
            "--#--##-" +
            "---####-",
            R: "--------" +
            "--####--" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--####--" +
            "--#---#-" +
            "--#---#-",
            S: "--------" +
            "---###--" +
            "--#---#-" +
            "--#-----" +
            "---###--" +
            "------#-" +
            "--#---#-" +
            "---###--",
            T: "--------" +
            "--#####-" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---",
            U: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "---###--",
            V: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "---#-#--" +
            "----#---",
            W: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#-#-#-" +
            "--##-##-" +
            "--#---#-",
            X: "--------" +
            "--#---#-" +
            "--#---#-" +
            "---#-#--" +
            "----#---" +
            "---#-#--" +
            "--#---#-" +
            "--#---#-",
            Y: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "---#-#--" +
            "----#---" +
            "----#---" +
            "----#---",
            Z: "--------" +
            "--#####-" +
            "------#-" +
            "-----#--" +
            "----#---" +
            "---#----" +
            "--#-----" +
            "--#####-",
            1: "--------" +
            "-----#--" +
            "----##--" +
            "---#-#--" +
            "-----#--" +
            "-----#--" +
            "-----#--" +
            "-----#--",
            2: "--------" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "--#####-" +
            "--#-----" +
            "--#-----" +
            "--#####-",
            3: "--------" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "--#####-",
            4: "--------" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "------#-",
            5: "--------" +
            "--#####-" +
            "--#-----" +
            "--#-----" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "--#####-",
            6: "----------" +
            "--#####-" +
            "--#-----" +
            "--#-----" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-",
            7: "--------" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "-----#--" +
            "----#---" +
            "----#---" +
            "----#---",
            8: "--------" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-",
            9: "--------" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-" +
            "------#-" +
            "------#-" +
            "--#####-",
            0: "--------" +
            "--#####-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#---#-" +
            "--#####-",
            "?" : "--------" +
            "---###--" +
            "--#---#-" +
            "------#-" +
            "-----#--" +
            "----#---" +
            "--------" +
            "----#---",
            "!" : "--------" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "----#---" +
            "--------" +
            "----#---",
            "$" : "--------" +
            "----#---" +
            "--#####-" +
            "--#-----" +
            "--#####-" +
            "------#-" +
            "--#####-" +
            "----#---",
            "€": "--------" +
            "----###-" +
            "---#----" +
            "--####--" +
            "---#----" +
            "--####--" +
            "---#----" +
            "----###-"
        };

        var alphabet = letter[0].match(new RegExp("[A-Z]", 'i'));
        var number = letter[0].match(new RegExp("[0-9]", 'i'));

        if(alphabet == letter[0]) {
            return letters[alphabet];
        } else if(number == letter[0]) {
            return letters[number];
        } else {
            return letters[letter[0]];
        }
    } else {
        alert("Veuillez entrer un charactère valide (AàZ, 0à9, ?, !, €, $)");
        return "Erreur";
    }
}