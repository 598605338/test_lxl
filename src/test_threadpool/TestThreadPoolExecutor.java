package test_threadpool;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * �ο���http://www.iteye.com/topic/1118660
 * 	   http://www.jeffjade.com/2015/04/06/2015-04-06-java-thread/
 *  1. ArrayBlockingQueue :  �н���������
 *	2. LinkedBlockingQueue : ��֧���н�/�޽�Ķ��У�ʹ������ʵ��
 *	3. PriorityBlockingQueue : ���ȶ��У����������������
 *	4. SynchronousQueue : ���г���Ϊ1�Ķ��У���Array�е�������ǣ�client thread�ύ��block queue����һ���������̣�ֱ����һ��worker thread��������poll task��
 * @author LXL
 *
 */
public class TestThreadPoolExecutor {
	public static void main(String[] args) {
		ThreadPoolExecutor threadPool = 
				new ThreadPoolExecutor(2, 10, 1, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(3));
		
		for(int i=0;i<6;i++){
			threadPool.execute(new MyRunnable("R"+i,5));
		}
				}
}
