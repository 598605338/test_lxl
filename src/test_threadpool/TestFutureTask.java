package test_threadpool;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * 参考：http://www.jeffjade.com/2015/04/06/2015-04-06-java-thread/
 * 如果某些线程的处理非常耗时，不希望它阻塞其它线程，可以考虑使用FutureTask，正如字面意义一样，该线程启用后，马上开始，
 * 但是处理结果将在”未来”某一时刻，才真正需要，在此之前，其它线程可以继续处理自己的事情
 * @author LXL
 *
 */
public class TestFutureTask {
	public static void main(String[] args) throws InterruptedException, ExecutionException {
		FutureTask<String> task = new FutureTask<String>(new Callable<String>(){

			@Override
			public String call() throws Exception {
				System.out.println("FutureTask开始处理...");
				Thread.sleep(5000);
				return "hello world";
			}
		});
		
		System.out.println("FutureTask准备开始...");
		new Thread(task).start();
		System.out.println("其他处理开始...");
		Thread.sleep(1000);
		System.out.println("其他处理结束...");
		System.out.println("FutureTask处理结果：" + task.get());
		System.out.println("全部处理完成");
	}
}
