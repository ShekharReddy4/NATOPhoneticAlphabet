NatoPhoneticAlphabetDict = {
"A":'Alpha',
"B":'Bravo',
"C":'Charlie',
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
' ':' '
}

input_name = raw_input("Enter your name: ")
print(input_name)
input_name_caps = input_name.upper()
for i in range(len(input_name_caps)):
    print(""+input_name_caps[i]+" for "+NatoPhoneticAlphabetDict[input_name_caps[i]])