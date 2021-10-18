
var NatoPhoneticAlphabetDict = {
    'A':'Alpha',
    'B':'Bravo',
    'C':'Charlie',
    'D':'Delta',
    'E':'Echo',
    'F':'Foxtrot',
    'G':'Golf',
    'H':'Hotel',
    'I':'India',
    'J':'Juliet',
    'K':'Kilo',
    'L':'Lima',
    'M':'Mike',
    'N':'November',
    'O':'Oscar',
    'P':'PAPA',
    'Q':'Quebec',
    'R':'Romeo',
    'S':'Sierra',
    'T':'Tango',
    'U':'Uniform',
    'V':'Victor',
    'W':'Whiskey',
    'X':'X-ray',
    'Y':'Yankee',
    'Z':'Zulu',
    ' ':'Single Space'
};


function TaskbtnClick() {
    // copy the text from the text box and make the value null in it

    var ele = document.getElementById("Txt2SpellLBL");
    var x = ele.value;
    ele.value = null;

    var input_name_caps = x.toUpperCase();
    var outputStr = "\n";
    for(var i = 0; i < input_name_caps.length; i++) {
        outputStr = outputStr + "" + input_name_caps.charAt(i)+" for " + NatoPhoneticAlphabetDict[input_name_caps.charAt(i)] + "\n"
    }

    var ele2 = document.getElementById("PhoneticLabel");
    ele2.innerText = outputStr;

}
