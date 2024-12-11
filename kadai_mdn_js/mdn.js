const today = new Date();

const [month, day, year] = [
  today.getMonth() + 1, // 月を0から始まるため、人間が読む形式にするためには+1します
  today.getDate(),
  today.getFullYear(),
];

console.log(`本日の日付は: ${year}年${month}月${day}日`);