//your JS code here. If required.
document.addEventlistener("DOMContentLoded",function(){
const ul=document.querySelector("#band");

const bands = ['The Plot in You', 'The Devil Wears Prada',
			   'Pierce the Veil', 'Norma Jean', 'The Bled',
			   'Say Anything', 'The Midway State',
			   'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
			   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sorted=bands.sort((a,b)=>{
	const normalise=str=>
		str.toLowerCase().replace(/^(a |an |the )/i,"");
	return normalise(a).localeCompare(normalise(b));
})

for(let i=0;i<sorted.length;i++){
	 const li = document.createElement("li");
  li.textContent = sorted[i];
  ul.appendChild(li);
}
})