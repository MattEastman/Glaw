	Today = new Date();
	TodayDay = Today.getDate();
	TodayMon = Today.getMonth();
	TodayYear = Today.getYear();
	if (TodayYear < 2000) TodayYear += 1900;
	if (TodayMon == 0) { TodayMonth = "January"; }
	else if (TodayMon == 1) { TodayMonth = "February"; }
	else if (TodayMon == 2) { TodayMonth = "March"; }
	else if (TodayMon == 3) { TodayMonth = "April"; }
	else if (TodayMon == 4) { TodayMonth = "May"; }
	else if (TodayMon == 5) { TodayMonth = "June"; }
	else if (TodayMon == 6) { TodayMonth = "July"; }
	else if (TodayMon == 7) { TodayMonth = "August"; }
	else if (TodayMon == 8) { TodayMonth = "September"; }
	else if (TodayMon == 9) { TodayMonth = "October"; }
	else if (TodayMon == 10) { TodayMonth = "November"; }
	else if (TodayMon == 11) { TodayMonth = "December"; }
	else { TodayMonth = TodayMon; }
	document.write(TodayYear);