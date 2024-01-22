import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemester.api";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h2>Academic semester</h2>
    </div>
  );
};

export default AcademicSemester;
