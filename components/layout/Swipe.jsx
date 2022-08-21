import { useEffect, useRef, useState } from "react";
import styles from "@styles/layout/Swipe.module.css";

export default function Swipe({ products }) {
  const actionRef = useRef();
  const [actionWidth, setActionWidth] = useState(0);
  const [swipedItems, setSwipedItems] = useState([]);
  const [verticalStart, setVerticalStart] = useState(0);
  const [horizontalStart, setHorizontalStart] = useState(0);

  // Handle touch start
  function handleTouchStart(e) {
    // Get vertical and horizontal start
    setVerticalStart(e.targetTouches[0].pageY);
    setHorizontalStart(e.targetTouches[0].pageX);

    // Get the target
    const target =
      e.target.localName === "p" ? e.target.parentElement : e.target;

    // Update swiped items
    setSwipedItems((prevItems) => {
      if (!prevItems.some((prevItem) => prevItem.id == target.id)) {
        return [
          ...prevItems,
          {
            id: target.id,
            element: target,
          },
        ];
      } else {
        return prevItems;
      }
    });
  }

  // Handle touch end
  function handleTouchEnd(e) {
    // Get vertical and horizontal end
    const verticalEnd = e.changedTouches[0].pageY;
    const horizontalEnd = e.changedTouches[0].pageX;

    // Calculate the differences
    const verticalDifference = Math.abs(verticalStart - verticalEnd);
    const horizontalDifference = horizontalStart - horizontalEnd;

    // Get the target
    const target =
      e.target.localName === "p" ? e.target.parentElement : e.target;

    // Add swiped class to the swiped item
    // Remove swiped class from previously swiped items
    if (horizontalDifference > 60 && verticalDifference < 60) {
      swipedItems.forEach((swipedItem) => {
        if (swipedItem.id == target.id) {
          swipedItem.element.classList.add(`${styles.swiped}`);
        } else {
          swipedItem.element.classList.remove(`${styles.swiped}`);
        }
      });
    }
  }

  useEffect(() => {
    setActionWidth(actionRef.current.offsetWidth);
  }, []);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.product_and_action}
          style={{ "--action_width": `${actionWidth}px` }}
        >
          <div
            id={product.id}
            className={`${styles.product}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <p>{product.id}</p>
            <p>{product.name}</p>
          </div>

          <p ref={actionRef} className={styles.action}>
            Delete
          </p>
        </div>
      ))}
    </div>
  );
}
