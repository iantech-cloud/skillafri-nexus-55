import { useState, useEffect } from 'react';

export interface StudentData {
  totalCourses: number;
  completedCourses: number;
  inProgressCourses: number;
  pendingAssignments: number;
  averageGrade: number;
  recentActivity: Array<{
    id: string;
    type: 'course' | 'assignment' | 'grade';
    title: string;
    date: string;
  }>;
}

export const useStudentData = () => {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [availableCourses, setAvailableCourses] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalCourses: 0,
    completedCourses: 0,
    totalStudyHours: 0,
    averageGrade: 0,
    pendingAssignments: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // TODO: Replace with real API calls when Supabase is connected
        // const userEnrollments = await databaseService.students.getEnrollments(userId);
        // const userAssignments = await databaseService.students.getAssignments(userId);
        
        // For now, set empty data until backend is integrated
        setEnrollments([]);
        setAssignments([]);
        setSubmissions([]);
        setAvailableCourses([]);
        setStats({
          totalCourses: 0,
          completedCourses: 0,
          totalStudyHours: 0,
          averageGrade: 0,
          pendingAssignments: 0
        });
      } catch (err) {
        setError('Failed to fetch student data. Backend integration required.');
      } finally {
        setLoading(false);
      }
    };

    // Simulate loading time
    setTimeout(() => {
      fetchStudentData();
    }, 1000);
  }, []);

  return { enrollments, assignments, submissions, availableCourses, stats, loading, error };
};