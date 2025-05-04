import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    const empty = [];
    return empty;
  }
  // get the list- an arr of objects
  const obj = getListStudents();

  // Use map() to extract the ids from the array of objects
  const ids = obj.map((obj) => obj.id);

  return ids;
}
