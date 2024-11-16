import Featured from '@/components/featured/Featured';
import styles from './page.module.css'
import CategoryList from '@/components/categoryList/CategoryList';
import Cardlist from '@/components/cardList/Cardlist';
import Menu from '@/components/menu/Menu';

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
      <Cardlist />
      <Menu />
      
      </div>
      
    </div>
  );
}
