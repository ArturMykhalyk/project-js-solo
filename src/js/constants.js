let totalPage = 0;

export function setTotalPage(value) {
  totalPage = Math.ceil(value);
}

export function getTotalPage() {
  return totalPage;
}
