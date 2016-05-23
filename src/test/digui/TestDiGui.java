package test.digui;

/**
 * 所谓递归就是自己调用自己，调用需要有一个出口，否则就成为死循环了。递归和for循环的主要区别是，递归的调用有自己的stack
 * 而for的lOOP调用共享stack, 另外递归最里层的方法最先执行完成才逐渐返回执行外层的方法（类似于spring的拦截器模式）
 * 
 * @author LXL
 *
 */
public class TestDiGui {

	public static void main(String[] args) {
		int result = 0;
		// result = getAddNum(10);
		// System.out.println(result);
		// decimalToBinary(10);
		// System.out.println(sb.toString());
//		gongyueshu(15, 21);
		hanon(3,'a','b','c');

	}

	/**
	 * num以内的数字求和
	 * 
	 * @param num
	 * @return
	 */
	public static int getAddNum(int num) {
		if (num == 0) {
			return num;
		} else
			return num + getAddNum(num - 1);
	}

	static StringBuilder sb = new StringBuilder();

	/**
	 * 十进制转成二进制
	 * 
	 * @param num
	 */
	public static void decimalToBinary(int num) {
		if (num == 0) {
			return;
		} else {
			decimalToBinary(num / 2);
			// System.out.print(num%2);
			sb.append(num % 2);
		}
	}

	/**
	 * 求两个数的最大公约数
	 * 
	 * @param num
	 */
	public static void gongyueshu(int num1, int num2) {
		if (num1 == num2) {
			System.out.println(num1);
		} else {
			gongyueshu(abs(num1 - num2), min(num1, num2));
		}
	}

	/**
	 * 求两个数的最小的数
	 * 
	 * @param num
	 */
	public static int min(int num1, int num2) {
		return num1 > num2 ? num2 : num1;
	}

	/**
	 * 求绝对值
	 * 
	 * @param num
	 */
	public static int abs(int num) {
		return num > 0 ? num : -num;
	}

	/**
	 * 递归方法hanon，求汉诺塔算法
	 * 
	 * @param num
	 */
	public static void hanon(int n, char a, char b, char c) {
		if (n == 1) {
			move(1, a, c);// 最后一种情况是，把A柱子上盘子移到C柱子上。
			return;
		}
		hanon(n - 1, a, c, b); // 递归，把n-1个盘子从A 盘上借助C盘移到B盘上
		move(n, a, c);// 调用move()方法
		hanon(n - 1, b, a, c);// 递归，把把n-1个盘子从B盘上借助A盘移到C盘上
	}

	public static void move(int n, char a, char c) {
		System.out.println(n + ":" + a + "-->" + c);// 打印移动盘子情况
	}

}
