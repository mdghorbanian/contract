function generate() {
  const text = document.getElementById("input").value;

  const contract = `
موضوع قرارداد:
${text}

بند 1: موضوع
این قرارداد بر اساس درخواست طرفین تنظیم شده است.

بند 2: شرایط پرداخت
پرداخت طبق توافق انجام می‌شود.

بند 3: تعهدات
طرفین موظف به اجرای مفاد قرارداد هستند.
`;

  document.getElementById("output").innerText = contract;
}
