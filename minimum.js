inlets = 1;
outlets = 1;
function list(d1, d2, d3, d4, d5){
	if((d1<d2) && (d1<d3) && (d1<d4) && (d1<d5)){
		outlet(0, 1)
		}
	if((d2<d1) && (d2<d3) && (d2<d4) && (d2<d5)){
		outlet(0, 2)
		}
	if((d3<d1) && (d3<d2) && (d3<d4) && (d3<d5)){
		outlet(0, 3)
		}
	if((d4<d1) && (d4<d2) && (d4<d3) && (d4<d5)){
		outlet(0, 4)
		}
	if((d5<d1) && (d5<d2) && (d5<d3) && (d5<d4)){
		outlet(0, 0)
		}
	}