const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 31 * DAY;

export const timePassed = (creation: Date) => {
	const diff = Date.now() - creation.getTime();
	const elapsed = -diff;

	const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

	if (diff < MINUTE) return 'less than a minute ago';
	if (diff < HOUR) return rtf.format(Math.floor(elapsed / MINUTE), 'minutes');
	if (diff < DAY) return rtf.format(Math.floor(elapsed / HOUR), 'hours');
	if (diff < MONTH) return rtf.format(Math.floor(elapsed / DAY), 'days');

	return creation.toLocaleDateString();
};
