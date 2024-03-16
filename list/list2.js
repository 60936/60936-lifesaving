function displayAnswer() {
    const userInput = document.getElementById("text_a").value;
	const response = document.getElementById("userInput");
    // Convert user input to lowercase for case-insensitive matching
	const input = userInput.toLowerCase();
	// Check if any keyword matches the user input
for (const keyword in keywordResponses) {
	if (input.includes(keyword)) {
	response.textContent = keywordResponses[keyword];
	return; 
    //s2Hygiene.html*
}else if(input.toLowerCase().indexOf("transmissable disease")>-1||input.toLowerCase().indexOf("what")>-1){response.innerHTML=`some transmissable diseases in the cause of lifesaving to be aware of are: 
[]colds, []influenza, []measles and mumps, 
[]glandular fever, []Hepatitis A or B, 
[]AIDS, []SARS, []Herpes, 
[]Tuberculosis, []some forms of meningitis, 
[]some skin infections.
.(References from SLSS manual)`;
return;
        
    
        
} else if (elementId === 'how transmit') {
    alert(`*How dieseases are transmitted?*
    -body fluids, blood, saliva, vomit, pus, urine, faeces;
    -enter lifesaver's bloodstream through cuts, mucous membranes, unprotected eyes, 
    -sexual intercourse;
    -transfusion/injections contaminated blood;
    -droplet infection;
    -infected mother to child in child birth, breast milk.
    .(References from SLSS manual)`);
} else if (elementId === 'mgt agst disease') {
    alert(`Precautions Before Lifesaving
    -wash thoroughly with soap and water;
    -cover exposed wounds with waterproof dressings;
    -wear gloves, tucked under long sleeves(if wearing long sleeves);
    -wear plastic apron for rest of body;
    -use pocket masks, face shields;
    -not cough or sneeze while treaing casualty;
    .(References from SLSS manual)`);
} else if (elementId === 'aft lifesaving') {
    alert(`After Lifesaving
    -soak clothing in bleach, hottest machine wash settings;
    -clean surfaces with bleach;
    -leave towels on surfaces for 30min, dry thoroughly;
    dispose hazardously materials safely;
    -wash pocket mask in tap running water, soak mask in bleach 30minutes;
    -wash mask again and dry it to prevent mould growing before storage;
    -wash hands thoroughly in soap and water.
    .(References from SLSS manual)`);
} else if (elementId === 'remember') {
    alert(`if skin is punctured which may be contaminated, wash the area thoroughly with soap and running tap water. Seek medical advice asap. 
    Use household bleach in well-ventilated areas.
    Always use pocket masks, surgical gloves, face shields, sterilizing agents as much as possible.
    .(References from SLSS manual)`);

}
}};
