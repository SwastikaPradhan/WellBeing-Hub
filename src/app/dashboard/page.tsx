import { databases } from '@/lib/appwrite';
import { DashboardGraphs } from '@/components/DashboardGraphs';

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const ACTIVITY_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ACTIVITY!;
const NUTRITION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_NUTRITION!;
const JOURNAL_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_JOURNAL!;

export default async function DashboardPage() {
  const [activityRes, nutritionRes, journalRes] = await Promise.all([
    databases.listDocuments(DB_ID, ACTIVITY_ID),
    databases.listDocuments(DB_ID, NUTRITION_ID),
    databases.listDocuments(DB_ID, JOURNAL_ID),
  ]);

  const activityData = activityRes.documents.map((doc: any) => ({
    day: doc.day, // e.g. Mon, Tue
    steps: doc.steps,
  }));

  const nutritionData = nutritionRes.documents.map((doc: any) => ({
    day: doc.day,
    calories: doc.calories,
  }));

  const journalData = journalRes.documents.map((doc: any) => ({
    date: doc.date,
    moodScore: doc.moodScore, 
  }));

  return <DashboardGraphs activityData={activityData} nutritionData={nutritionData} journalData={journalData} />;
}
